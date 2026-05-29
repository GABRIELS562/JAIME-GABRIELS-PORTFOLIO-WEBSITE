import React, { useState, useEffect, useRef } from 'react';
import styles from './Terminal.module.css';

const Terminal = ({ isOpen, onClose }) => {
  const [history, setHistory] = useState([]);
  const [currentInput, setCurrentInput] = useState('');
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef(null);
  const terminalRef = useRef(null);

  const PROMPT = 'jaime@jagdevops:~$';

  // Project data from actual live systems
  const projects = {
    'lims': {
      name: 'JAG-LABSCIENTIFIC-DNA',
      description: 'DNA Laboratory Information Management System',
      url: 'https://lims.jagdevops.co.za',
      github: 'https://github.com/GABRIELS562/JAG-LABSCIENTIFIC-DNA',
      status: 'running',
      stack: ['React 18', 'Node.js', 'PostgreSQL', 'K3s', 'GitHub Actions', 'ArgoCD'],
      metrics: { uptime: '99.9%', workflows: 6, environments: 3 }
    },
    'eshop': {
      name: 'eshop-platform-infra',
      description: 'Cloud-Native Microservices E-Commerce Platform',
      url: 'https://eshop.jagdevops.co.za',
      github: 'https://github.com/GABRIELS562/eshop-platform-infra',
      status: 'running',
      stack: ['Kubernetes', 'gRPC', 'Go', 'C#', 'Python', 'ArgoCD', 'OpenTelemetry'],
      metrics: { services: 14, argocd_apps: 17, protocols: 'gRPC' }
    },
    'forensic': {
      name: 'forensic-evidence-collector',
      description: 'Tamper-Evident Compliance Audit Trail System',
      url: 'https://dashboards.jagdevops.co.za',
      github: 'https://github.com/GABRIELS562/forensic-evidence-collector',
      status: 'running',
      stack: ['Python 3.11', 'SQLite', 'Docker', 'Prometheus', 'SHA-256'],
      metrics: { evidence_blocks: '8500+', chain_integrity: '100%', db_size: '1GB' }
    }
  };

  // Initialize with welcome message
  useEffect(() => {
    if (isOpen && history.length === 0) {
      setHistory([
        { type: 'output', content: `
   ╦╔═╗╔═╗  ╔╦╗╔═╗╦  ╦╔═╗╔═╗╔═╗
   ║╠═╣║ ╦   ║║║╣ ╚╗╔╝║ ║╠═╝╚═╗
  ╚╝╩ ╩╚═╝  ═╩╝╚═╝ ╚╝ ╚═╝╩  ╚═╝

  Welcome to Jaime Gabriels' DevOps Portfolio Terminal
  Type 'help' to see available commands

  [System] 2 production servers online
  [System] 3 live applications running
  [System] 17 ArgoCD applications synced
` }
      ]);
    }
  }, [isOpen, history.length]);

  // Auto-scroll to bottom
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  // Focus input when terminal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const executeCommand = (cmd) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    const args = trimmedCmd.split(' ');
    const command = args[0];
    const arg = args.slice(1).join(' ');

    let output = '';

    switch (command) {
      case '':
        return '';

      case 'help':
      case 'man':
        output = `
Available commands:

  NAVIGATION
    ls [dir]        List directory contents
    cat <file>      Display file contents
    pwd             Print working directory

  SYSTEM INFO
    whoami          Display user information
    hostname        Show hostname
    uname -a        System information
    neofetch        System info with ASCII art

  DEVOPS
    kubectl get pods    Show running applications
    docker ps           List containers

  PORTFOLIO
    projects        List all projects
    skills          Show technical skills
    certs           Show certifications
    contact         Contact information
    open <project>  Open project in browser

  UTILITIES
    clear           Clear terminal
    history         Command history
    exit            Close terminal

  Try: ls projects | cat lims | kubectl get pods
`;
        break;

      case 'whoami':
        output = `
jaime-gabriels
├── Role: DevOps Engineer
├── Location: Cape Town, South Africa
├── Background: Forensic Science -> Infrastructure
└── Focus: Kubernetes, GitOps, Observability
`;
        break;

      case 'hostname':
        output = 'jagdevops.co.za';
        break;

      case 'pwd':
        output = '/home/jaime/portfolio';
        break;

      case 'uname':
        if (arg.includes('-a')) {
          output = 'Linux jagdevops 6.1.0-k3s1 #1 SMP x86_64 GNU/Linux';
        } else {
          output = 'Linux';
        }
        break;

      case 'neofetch':
        output = `
        .-/+oossssoo+/-.              jaime@jagdevops
    \`:+ssssssssssssssssss+:\`          ----------------
  -+ssssssssssssssssssyyssss+-        OS: Ubuntu 24.04 LTS
.ossssssssssssssssssdMMMNysssso.      Kernel: 6.1.0-k3s1
/ssssssssssshdmmNNmmyNMMMMhssssss/    Uptime: Production since 2024
+ssssssssshmydMMMMMMMNddddyssssssss+  Shell: bash 5.2
/sssssssshNMMMyhhyyyyhmNMMMNhssssss/  Terminal: jagdevops-portfolio
.ssssssssdMMMNhsssssssshNMMMdssssss.
+sssshhhyNMMNyssssssssyyNMMMysssss+   Infrastructure:
ossyNMMMNyMMhssssssssshmmmmhssssso     Server1: K3s Cluster (17 apps)
ossyNMMMNyMMhssssssssshmmmmhssssso     Server2: Monitoring + Docker
+sssshhhyNMMNyssssssssyyNMMMysssss+
.ssssssssdMMMNhsssssssshNMMMdssssss.  Certifications: 8 active
/sssssssshNMMMyhhyyyyhdNMMMNhssssss/  Live Apps: 3 production
+sssssssssdmydMMMMMMMMddddyssssssss+
/ssssssssssshdmNNNNmyNMMMMhssssss/
.ossssssssssssssssssdMMMNysssso.
  -+sssssssssssssssssyyyssss+-
    \`:+ssssssssssssssssss+:\`
        .-/+oossssoo+/-.
`;
        break;

      case 'ls':
        if (arg.includes('projects') || arg === '-la projects') {
          output = `total 3
drwxr-xr-x  jaime devops  4096 May 29 10:00 lims/      [LIVE] DNA Analysis LIMS
drwxr-xr-x  jaime devops  4096 May 29 10:00 eshop/     [LIVE] 14 Microservices
drwxr-xr-x  jaime devops  4096 May 29 10:00 forensic/  [LIVE] Evidence Collector`;
        } else if (arg.includes('-la') || arg.includes('-l')) {
          output = `total 24
drwxr-xr-x  jaime devops  4096 May 29 10:00 .
drwxr-xr-x  jaime devops  4096 May 29 10:00 ..
-rw-r--r--  jaime devops   512 May 29 10:00 .bashrc
drwxr-xr-x  jaime devops  4096 May 29 10:00 projects/
drwxr-xr-x  jaime devops  4096 May 29 10:00 certs/
-rw-r--r--  jaime devops  1024 May 29 10:00 resume.pdf
-rw-r--r--  jaime devops   128 May 29 10:00 contact.txt`;
        } else {
          output = 'projects/  certs/  resume.pdf  contact.txt';
        }
        break;

      case 'cat':
        if (arg === 'lims' || arg === 'projects/lims') {
          const p = projects.lims;
          output = `
══════════════════════════════════════════════════════════════
  ${p.name}
══════════════════════════════════════════════════════════════
  ${p.description}

  STATUS:    [LIVE] ${p.status.toUpperCase()}
  URL:       ${p.url}
  GITHUB:    ${p.github}

  STACK:     ${p.stack.join(' | ')}

  METRICS:
    - Uptime:       ${p.metrics.uptime}
    - CI Workflows: ${p.metrics.workflows}
    - Environments: ${p.metrics.environments} (prod/dev/test)

  FEATURES:
    - Full CI/CD with GitHub Actions
    - ArgoCD GitOps deployment
    - HPA autoscaling
    - Vault secrets management
══════════════════════════════════════════════════════════════`;
        } else if (arg === 'eshop' || arg === 'projects/eshop') {
          const p = projects.eshop;
          output = `
══════════════════════════════════════════════════════════════
  ${p.name}
══════════════════════════════════════════════════════════════
  ${p.description}

  STATUS:    [LIVE] ${p.status.toUpperCase()}
  URL:       ${p.url}
  GITHUB:    ${p.github}

  STACK:     ${p.stack.join(' | ')}

  METRICS:
    - Microservices: ${p.metrics.services}
    - ArgoCD Apps:   ${p.metrics.argocd_apps}
    - Protocol:      ${p.metrics.protocols}

  FEATURES:
    - Polyglot architecture (Go, C#, Python, Node, Java)
    - Full observability with OpenTelemetry
    - Redis + RabbitMQ + PostgreSQL
    - Network policies for zero-trust
══════════════════════════════════════════════════════════════`;
        } else if (arg === 'forensic' || arg === 'projects/forensic') {
          const p = projects.forensic;
          output = `
══════════════════════════════════════════════════════════════
  ${p.name}
══════════════════════════════════════════════════════════════
  ${p.description}

  STATUS:    [LIVE] ${p.status.toUpperCase()}
  URL:       ${p.url}
  GITHUB:    ${p.github}

  STACK:     ${p.stack.join(' | ')}

  METRICS:
    - Evidence Blocks: ${p.metrics.evidence_blocks}
    - Chain Integrity: ${p.metrics.chain_integrity}
    - Database Size:   ${p.metrics.db_size}

  FEATURES:
    - SHA-256 blockchain-style hash chains
    - Tamper-evident audit trails
    - Prometheus metrics endpoint
    - Real-time Command Center dashboard
══════════════════════════════════════════════════════════════`;
        } else if (arg === 'contact.txt' || arg === 'contact') {
          output = `
# Contact Information

Email:    contact@jagdevops.com
LinkedIn: linkedin.com/in/jaime-gabriels-643132386
GitHub:   github.com/GABRIELS562
Website:  jagdevops.co.za

# Live Infrastructure
LIMS:     lims.jagdevops.co.za
eShop:    eshop.jagdevops.co.za
Forensic: dashboards.jagdevops.co.za
`;
        } else if (arg === 'resume.pdf') {
          output = `[Binary file - use 'open resume' to download]`;
        } else if (arg === '.bashrc') {
          output = `# ~/.bashrc - Jaime's DevOps Environment
export PS1="\\[\\e[32m\\]\\u@jagdevops\\[\\e[0m\\]:\\[\\e[34m\\]\\w\\[\\e[0m\\]\\$ "
alias k='kubectl'
alias d='docker'
alias tf='terraform'`;
        } else {
          output = `cat: ${arg || '<file>'}: No such file or directory
Try: cat lims | cat eshop | cat forensic`;
        }
        break;

      case 'projects':
        output = `
┌─────────────────────────────────────────────────────────────────┐
│                    PRODUCTION PROJECTS                          │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  [LIMS] DNA Analysis System                                     │
│     URL: lims.jagdevops.co.za                                   │
│     Stack: React, Node.js, PostgreSQL, K3s, ArgoCD              │
│                                                                 │
│  [ESHOP] Cloud-Native Microservices                             │
│     URL: eshop.jagdevops.co.za                                  │
│     Stack: 14 services, gRPC, Go/C#/Python, OpenTelemetry       │
│                                                                 │
│  [FORENSIC] Evidence Collector                                  │
│     URL: dashboards.jagdevops.co.za                             │
│     Stack: Python, SHA-256 hash chains, Prometheus              │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘

Type 'cat <project>' for details or 'open <project>' to visit`;
        break;

      case 'skills':
        output = `
┌─────────────────────────────────────────────────────────────────┐
│                         STACK                                   │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ORCHESTRATION    Kubernetes | OpenShift | Docker | Helm        │
│  CI/CD            GitHub Actions | GitLab CI | ArgoCD           │
│  IaC              Terraform | Ansible                           │
│  CLOUD            AWS | Azure                                   │
│  OBSERVABILITY    Prometheus | Grafana | Loki | OpenTelemetry   │
│  SECURITY         Vault | SonarQube | Trivy | Nexus             │
│  LANGUAGES        Python | Go | Node.js | Bash                  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘`;
        break;

      case 'certs':
      case 'certifications':
        output = `
┌─────────────────────────────────────────────────────────────────┐
│                    CERTIFICATIONS                               │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  [x] CKA  - Certified Kubernetes Administrator          2025    │
│  [x] CKS  - Certified Kubernetes Security Specialist    2026    │
│  [x] AWS  - Solutions Architect Associate               2025    │
│  [x] AWS  - Cloud Practitioner                          2025    │
│  [x] AWS  - GenAI Practitioner                          2025    │
│  [x] TF   - HashiCorp Terraform Associate               2025    │
│  [x] AZ   - Microsoft Azure Fundamentals (AZ-900)       2025    │
│  [x] PY   - PCAP Python Programming                     2024    │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘`;
        break;

      case 'contact':
        output = `
┌─────────────────────────────────────────────────────────────────┐
│                       CONTACT                                   │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Email:     contact@jagdevops.com                               │
│  LinkedIn:  linkedin.com/in/jaime-gabriels-643132386            │
│  GitHub:    github.com/GABRIELS562                              │
│  Website:   jagdevops.co.za                                     │
│                                                                 │
│  LIVE SITES:                                                    │
│    lims.jagdevops.co.za                                         │
│    eshop.jagdevops.co.za                                        │
│    dashboards.jagdevops.co.za                                   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘`;
        break;

      case 'kubectl':
        if (arg.includes('get pods') || arg.includes('get po')) {
          output = `NAMESPACE     NAME                                    READY   STATUS    AGE
eshop         frontend-79d8dcf86c-xrx75               1/1     Running   2d
eshop         cartservice-558c66b7c7-xx49z            1/1     Running   2d
eshop         checkoutservice-85fdc885c6-7ltjf        1/1     Running   2d
eshop         productcatalogservice-7d8b9554b4-ltd2s  1/1     Running   2d
eshop         currencyservice-7968b878fb-hlqmm        1/1     Running   2d
eshop         paymentservice-fcfcc95c4-pl987          1/1     Running   2d
eshop         shippingservice-7c8d7f9c7d-qbc5z        1/1     Running   2d
eshop         emailservice-56844ff8dc-226kv           1/1     Running   2d
eshop         recommendationservice-6b84766858-p8sdb  1/1     Running   2d
eshop         adservice-78ffd66756-pq4xj              1/1     Running   2d
eshop         redis-cart-6b45d46547-gsvqf             1/1     Running   3d
develop       lims-develop-frontend-7dc65855cf-pglqb  1/1     Running   4d
develop       lims-develop-backend-858769bc5c-pffkr   1/1     Running   4d
develop       lims-develop-postgresql-0               1/1     Running   4d
argocd        argocd-server-64d5fcbd58-b6n6p          1/1     Running   260d`;
        } else if (arg.includes('get svc') || arg.includes('get services')) {
          output = `NAMESPACE   NAME                      TYPE        CLUSTER-IP      PORT(S)
eshop       frontend                  ClusterIP   10.43.89.123    80/TCP
eshop       cartservice               ClusterIP   10.43.156.78    7070/TCP
eshop       checkoutservice           ClusterIP   10.43.45.67     5050/TCP
eshop       productcatalogservice     ClusterIP   10.43.12.34     3550/TCP
develop     lims-develop-frontend     ClusterIP   10.43.194.224   80/TCP
develop     lims-develop-backend      ClusterIP   10.43.12.46     3001/TCP`;
        } else if (arg.includes('get nodes')) {
          output = `NAME      STATUS   ROLES                  AGE    VERSION
server1   Ready    control-plane,master   271d   v1.29.5+k3s1`;
        } else if (arg.includes('get apps') || arg.includes('get applications')) {
          output = `NAME                      SYNC     HEALTH   NAMESPACE
frontend                  Synced   Healthy  eshop
cartservice               Synced   Healthy  eshop
checkoutservice           Synced   Healthy  eshop
productcatalogservice     Synced   Healthy  eshop
currencyservice           Synced   Healthy  eshop
paymentservice            Synced   Healthy  eshop
shippingservice           Synced   Healthy  eshop
emailservice              Synced   Healthy  eshop
recommendationservice     Synced   Healthy  eshop
adservice                 Synced   Healthy  eshop
redis-cart                Synced   Healthy  eshop
lims                      Synced   Healthy  develop`;
        } else {
          output = `Try: kubectl get pods | kubectl get svc | kubectl get apps`;
        }
        break;

      case 'docker':
        if (arg.includes('ps')) {
          output = `CONTAINER ID   IMAGE                      STATUS       NAMES
a1b2c3d4e5f6   forensic-collector:latest  Up 5 days    forensic-collector
b2c3d4e5f6g7   nginx:alpine               Up 5 days    dashboard-server
c3d4e5f6g7h8   prom/prometheus:latest     Up 5 days    prometheus
d4e5f6g7h8i9   grafana/grafana:latest     Up 5 days    grafana
e5f6g7h8i9j0   grafana/loki:latest        Up 5 days    loki
f6g7h8i9j0k1   hashicorp/vault:1.15       Up 5 days    vault`;
        } else {
          output = `Try: docker ps`;
        }
        break;

      case 'open':
        if (arg === 'lims') {
          window.open('https://lims.jagdevops.co.za', '_blank');
          output = `Opening https://lims.jagdevops.co.za ...`;
        } else if (arg === 'eshop') {
          window.open('https://eshop.jagdevops.co.za', '_blank');
          output = `Opening https://eshop.jagdevops.co.za ...`;
        } else if (arg === 'forensic') {
          window.open('https://dashboards.jagdevops.co.za', '_blank');
          output = `Opening https://dashboards.jagdevops.co.za ...`;
        } else if (arg === 'github') {
          window.open('https://github.com/GABRIELS562', '_blank');
          output = `Opening GitHub profile...`;
        } else if (arg === 'linkedin') {
          window.open('https://linkedin.com/in/jaime-gabriels-643132386', '_blank');
          output = `Opening LinkedIn profile...`;
        } else if (arg === 'resume') {
          window.open('/Jaime-Gabriels-DevOps-Resume.pdf', '_blank');
          output = `Downloading resume...`;
        } else {
          output = `Usage: open <lims|eshop|forensic|github|linkedin|resume>`;
        }
        break;

      case 'clear':
        setHistory([]);
        return null;

      case 'history':
        output = commandHistory.map((cmd, i) => `  ${i + 1}  ${cmd}`).join('\n') || 'No commands in history';
        break;

      case 'exit':
      case 'quit':
        onClose();
        return null;

      case 'sudo':
        output = `[sudo] Nice try! This is a portfolio terminal.`;
        break;

      case 'rm':
        output = `rm: permission denied (this portfolio is protected)`;
        break;

      case 'date':
        output = new Date().toString();
        break;

      case 'echo':
        output = arg || '';
        break;

      default:
        output = `${command}: command not found. Type 'help' for available commands.`;
    }

    return output;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newHistory = [...history, { type: 'input', content: `${PROMPT} ${currentInput}` }];
    const output = executeCommand(currentInput);

    if (output !== null) {
      if (output) {
        newHistory.push({ type: 'output', content: output });
      }
      setHistory(newHistory);
    }

    if (currentInput.trim()) {
      setCommandHistory([...commandHistory, currentInput]);
    }

    setCurrentInput('');
    setHistoryIndex(-1);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex < commandHistory.length - 1 ? historyIndex + 1 : historyIndex;
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[commandHistory.length - 1 - newIndex] || '');
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[commandHistory.length - 1 - newIndex] || '');
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setCurrentInput('');
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const commands = ['help', 'whoami', 'ls', 'cat', 'projects', 'skills', 'certs', 'contact', 'kubectl', 'docker', 'open', 'clear', 'exit'];
      const match = commands.find(cmd => cmd.startsWith(currentInput));
      if (match) {
        setCurrentInput(match);
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.terminal} onClick={e => e.stopPropagation()}>
        <div className={styles.titleBar}>
          <div className={styles.buttons}>
            <button className={styles.closeBtn} onClick={onClose} title="Close" />
            <button className={styles.minimizeBtn} title="Minimize" />
            <button className={styles.maximizeBtn} title="Maximize" />
          </div>
          <div className={styles.title}>jaime@jagdevops: ~/portfolio</div>
          <div className={styles.titleSpacer} />
        </div>

        <div className={styles.content} ref={terminalRef} onClick={() => inputRef.current?.focus()}>
          {history.map((item, index) => (
            <div key={index} className={item.type === 'input' ? styles.inputLine : styles.outputLine}>
              <pre>{item.content}</pre>
            </div>
          ))}

          <form onSubmit={handleSubmit} className={styles.inputForm}>
            <span className={styles.prompt}>{PROMPT}</span>
            <input
              ref={inputRef}
              type="text"
              value={currentInput}
              onChange={e => setCurrentInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className={styles.input}
              autoFocus
              spellCheck={false}
              autoComplete="off"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
