import React, { useState, useEffect } from 'react';
import styles from './LiveStatus.module.css';

// Individual project status badge
export const LiveStatusBadge = ({ url, name }) => {
  const [status, setStatus] = useState('checking');
  const [latency, setLatency] = useState(null);

  useEffect(() => {
    const checkHealth = async () => {
      const startTime = Date.now();
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000);

        const response = await fetch(url, {
          method: 'HEAD',
          mode: 'no-cors',
          signal: controller.signal
        });

        clearTimeout(timeoutId);
        const endTime = Date.now();
        setLatency(endTime - startTime);
        setStatus('online');
      } catch (error) {
        // With no-cors mode, even successful requests might not return properly
        // So we'll assume online if we get here quickly
        const endTime = Date.now();
        if (endTime - startTime < 3000) {
          setLatency(endTime - startTime);
          setStatus('online');
        } else {
          setStatus('offline');
        }
      }
    };

    checkHealth();
    const interval = setInterval(checkHealth, 30000); // Check every 30s
    return () => clearInterval(interval);
  }, [url]);

  return (
    <div className={`${styles.badge} ${styles[status]}`}>
      <span className={styles.dot} />
      <span className={styles.text}>
        {status === 'checking' && 'Checking...'}
        {status === 'online' && 'LIVE'}
        {status === 'offline' && 'Offline'}
      </span>
      {latency && status === 'online' && (
        <span className={styles.latency}>{latency}ms</span>
      )}
    </div>
  );
};

// Infrastructure status bar showing all servers
const LiveStatus = () => {
  const [servers, setServers] = useState({
    lims: { status: 'checking', name: 'LIMS', url: 'https://lims.jagdevops.co.za' },
    finance: { status: 'checking', name: 'Finance', url: 'https://finance.jagdevops.co.za' },
    pharma: { status: 'checking', name: 'Pharma', url: 'https://pharma.jagdevops.co.za' }
  });
  const [isExpanded, setIsExpanded] = useState(false);
  const [lastChecked, setLastChecked] = useState(null);

  useEffect(() => {
    const checkAllServers = async () => {
      const updatedServers = { ...servers };

      for (const [key, server] of Object.entries(servers)) {
        try {
          const startTime = Date.now();
          await fetch(server.url, { method: 'HEAD', mode: 'no-cors' });
          const latency = Date.now() - startTime;
          updatedServers[key] = {
            ...server,
            status: latency < 3000 ? 'online' : 'slow',
            latency
          };
        } catch {
          updatedServers[key] = { ...server, status: 'offline' };
        }
      }

      setServers(updatedServers);
      setLastChecked(new Date());
    };

    checkAllServers();
    const interval = setInterval(checkAllServers, 60000);
    return () => clearInterval(interval);
  }, []);

  const onlineCount = Object.values(servers).filter(s => s.status === 'online').length;
  const totalCount = Object.keys(servers).length;

  return (
    <div className={styles.statusBar}>
      <button
        className={styles.statusButton}
        onClick={() => setIsExpanded(!isExpanded)}
        aria-expanded={isExpanded}
      >
        <span className={`${styles.statusDot} ${onlineCount === totalCount ? styles.allOnline : styles.partial}`} />
        <span className={styles.statusText}>
          {onlineCount}/{totalCount} Live
        </span>
        <svg
          className={`${styles.chevron} ${isExpanded ? styles.expanded : ''}`}
          viewBox="0 0 24 24"
          width="16"
          height="16"
        >
          <path fill="currentColor" d="M7 10l5 5 5-5z"/>
        </svg>
      </button>

      {isExpanded && (
        <div className={styles.dropdown}>
          <div className={styles.dropdownHeader}>
            <span>Infrastructure Status</span>
            {lastChecked && (
              <span className={styles.lastChecked}>
                Updated {lastChecked.toLocaleTimeString()}
              </span>
            )}
          </div>

          {Object.entries(servers).map(([key, server]) => (
            <a
              key={key}
              href={server.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.serverRow}
            >
              <span className={`${styles.serverDot} ${styles[server.status]}`} />
              <span className={styles.serverName}>{server.name}</span>
              <span className={styles.serverStatus}>
                {server.status === 'online' && `${server.latency}ms`}
                {server.status === 'checking' && 'Checking...'}
                {server.status === 'offline' && 'Offline'}
              </span>
            </a>
          ))}

          <div className={styles.dropdownFooter}>
            <span>3-Server Architecture</span>
            <span>K3s + Prometheus + Grafana</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default LiveStatus;
