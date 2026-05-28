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
      type: 'directory',
      description: 'DNA Laboratory Information Management System',
      url: 'https://lims.jagdevops.co.za',
      github: 'https://github.com/GABRIELS562/JAG-LABSCIENTIFIC-DNA',
      status: 'running',
      stack: ['React 18', 'Node.js', 'PostgreSQL', 'K3s', 'GitHub Actions', 'ArgoCD'],
      metrics: { uptime: '99.9%', workflows: 6, environments: 3 }
    },
    'eshop': {
      name: 'eshop-platform-infra',
      type: 'directory',
      description: 'Cloud-Native Microservices E-Commerce Platform',
      url: 'https://eshop.jagdevops.co.za',
      github: 'https://github.com/GABRIELS562/eshop-platform-infra',
      status: 'running',
      stack: ['Kubernetes', 'gRPC', 'Go', 'C#', 'Python', 'ArgoCD', 'OpenTelemetry'],
      metrics: { services: 14, argocd_apps: 17, protocols: 'gRPC' }
    },
    'forensic': {
      name: 'forensic-evidence-collector',
      type: 'directory',
      description: 'Tamper-Evident Compliance Audit Trail System',
      url: 'https://dashboards.jagdevops.co.za',
      github: 'https://github.com/GABRIELS562/forensic-evidence-collector',
      status: 'running',
      stack: ['Python 3.11', 'SQLite', 'Docker', 'Prometheus', 'SHA-256'],
      metrics: { evidence_blocks: '8500+', chain_integrity: '100%', db_size: '1GB' }
    }
  };

  const skills = {
    'cloud': ['AWS', 'Terraform', 'Ansible'],
    'containers': ['Docker', 'Kubernetes', 'K3s', 'Helm'],
    'cicd': ['Jenkins', 'ArgoCD', 'GitHub Actions'],
    'monitoring': ['Prometheus', 'Grafana', 'Loki', 'Alertmanager'],
    'languages': ['Python', 'JavaScript', 'Bash', 'HCL'],
    'databases': ['PostgreSQL', 'Redis']
  };

  const certifications = [
    { name: 'AWS Solutions Architect Associate', status: 'certified', year: '2025' },
    { name: 'HashiCorp Terraform Associate', status: 'certified', year: '2025' },
    { name: 'PCAP Python Programming', status: 'certified', year: '2024' },
    { name: 'Certified Kubernetes Administrator (CKA)', status: 'pending', year: 'Dec 2025' },
    { name: 'Certified Kubernetes Security (CKS)', status: 'pending', year: 'Feb 2026' }
  ];

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
    cd <dir>        Change directory (simulated)

  SYSTEM INFO
    whoami          Display user information
    hostname        Show hostname
    uname -a        System information
    uptime          System uptime
    neofetch        System info with ASCII art

  DEVOPS
    kubectl get pods    Show running applications
    docker ps           List containers
    systemctl status    Service status

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
    help            Show this help

  Try: ls -la projects | cat lims | kubectl get pods
`;
        break;

      case 'whoami':
        output = `
jaime-gabriels
├── Role: DevOps Engineer
├── Background: 15+ years Forensic DNA Analysis
├── Education: BSc Biotechnology, MSc Business Leadership
├── Location: South Africa
└── Specialty: Applying forensic rigor to infrastructure

"From analyzing DNA evidence to building resilient infrastructure"
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
          output = 'Linux jagdevops 6.17.0-29-generic #29~24.04.1-Ubuntu SMP x86_64 GNU/Linux';
        } else {
          output = 'Linux';
        }
        break;

      case 'uptime':
        output = ` 19:50:42 up 1 day,  3:51,  2 users,  load average: 2.46, 1.54, 1.19
Server1: K3s Production | Server2: Monitoring Stack | Server3: Automation`;
        break;

      case 'neofetch':
        output = `
        .-/+oossssoo+/-.              jaime@jagdevops
    \`:+ssssssssssssssssss+:\`          ----------------
  -+ssssssssssssssssssyyssss+-        OS: Ubuntu 24.04 LTS
.ossssssssssssssssssdMMMNysssso.      Kernel: 6.17.0-29-generic
/ssssssssssshdmmNNmmyNMMMMhssssss/    Uptime: Production since 2024
+ssssssssshmydMMMMMMMNddddyssssssss+  Shell: bash 5.2.21
/sssssssshNMMMyhhyyyyhmNMMMNhssssss/  Terminal: jagdevops-portfolio
.ssssssssdMMMNhsssssssshNMMMdssssss.
+sssshhhyNMMNyssssssssyyNMMMysssss+   Infrastructure:
ossyNMMMNyMMhssssssssshmmmmhssssso     Server1: K3s + Jenkins + Registry
ossyNMMMNyMMhssssssssshmmmmhssssso     Server2: Prometheus + Grafana + Loki
+sssshhhyNMMNyssssssssyyNMMMysssss+    Server3: n8n + Automation
.ssssssssdMMMNhsssssssshNMMMdssssss.   AWS EC2: Forensic Compliance
/sssssssshNMMMyhhyyyyhdNMMMNhssssss/
+sssssssssdmydMMMMMMMMddddyssssssss+  Certifications: 3 active, 2 pending
/ssssssssssshdmNNNNmyNMMMMhssssss/    Live Apps: 3 production
.ossssssssssssssssssdMMMNysssso.      Dashboards: 18 Grafana
  -+sssssssssssssssssyyyssss+-
    \`:+ssssssssssssssssss+:\`
        .-/+oossssoo+/-.
`;
        break;

      case 'ls':
        if (arg.includes('projects') || arg === '-la projects') {
          output = `total 3
drwxr-xr-x  jaime devops  4096 May 24 19:50 .
drwxr-xr-x  jaime devops  4096 May 24 19:50 ..
drwxr-xr-x  jaime devops  4096 May 24 17:38 lims/        [LIVE] DNA Analysis System
drwxr-xr-x  jaime devops  4096 Sep 23 08:14 finance/     [LIVE] Trading Platform
drwxr-xr-x  jaime devops  4096 Sep 23 08:14 pharma/      [LIVE] Manufacturing System`;
        } else if (arg.includes('-la') || arg.includes('-l')) {
          output = `total 24
drwxr-xr-x  jaime devops  4096 May 24 19:50 .
drwxr-xr-x  jaime devops  4096 May 24 19:50 ..
-rw-r--r--  jaime devops   512 May 24 19:50 .bashrc
-rw-r--r--  jaime devops   256 May 24 19:50 .profile
drwxr-xr-x  jaime devops  4096 May 24 19:50 projects/
drwxr-xr-x  jaime devops  4096 May 24 19:50 skills/
drwxr-xr-x  jaime devops  4096 May 24 19:50 certs/
-rw-r--r--  jaime devops  1024 May 24 19:50 resume.pdf
-rw-r--r--  jaime devops   128 May 24 19:50 contact.txt`;
        } else {
          output = 'projects/  skills/  certs/  resume.pdf  contact.txt';
        }
        break;

      case 'cat':
        if (arg === 'lims' || arg === 'projects/lims') {
          const p = projects.lims;
          output = `
╔══════════════════════════════════════════════════════════════════╗
║  ${p.name}
╠══════════════════════════════════════════════════════════════════╣
║  ${p.description}
║
║  STATUS:    🟢 ${p.status.toUpperCase()}
║  URL:       ${p.url}
║  GITHUB:    ${p.github}
║
║  STACK:     ${p.stack.join(' | ')}
║
║  METRICS:
║    • Uptime:           ${p.metrics.uptime}
║    • Version:          ${p.metrics.version}
║    • Samples/hour:     ${p.metrics.samples_per_hour}
║
║  FEATURES:
║    • 12-stage DNA processing pipeline
║    • Forensic chain-of-custody tracking
║    • Real-time dashboard with PostgreSQL
║    • Jenkins CI/CD → Docker → K3s deployment
║    • PWA with offline capability
╚══════════════════════════════════════════════════════════════════╝`;
        } else if (arg === 'finance' || arg === 'projects/finance') {
          const p = projects.finance;
          output = `
╔══════════════════════════════════════════════════════════════════╗
║  ${p.name}
╠══════════════════════════════════════════════════════════════════╣
║  ${p.description}
║
║  STATUS:    🟢 ${p.status.toUpperCase()}
║  URL:       ${p.url}
║  GITHUB:    ${p.github}
║
║  STACK:     ${p.stack.join(' | ')}
║
║  METRICS:
║    • Latency:          ${p.metrics.latency}
║    • Replicas:         ${p.metrics.replicas} (High Availability)
║    • Volume:           ${p.metrics.volume}
║
║  FEATURES:
║    • Live market data API (AAPL, GOOGL, MSFT, AMZN)
║    • Sub-10ms trading latency
║    • ArgoCD GitOps with <60s recovery
║    • SOX Section 404 compliance monitoring
║    • Zero-downtime rolling deployments
╚══════════════════════════════════════════════════════════════════╝`;
        } else if (arg === 'pharma' || arg === 'projects/pharma') {
          const p = projects.pharma;
          output = `
╔══════════════════════════════════════════════════════════════════╗
║  ${p.name}
╠══════════════════════════════════════════════════════════════════╣
║  ${p.description}
║
║  STATUS:    🟢 ${p.status.toUpperCase()}
║  URL:       ${p.url}
║  GITHUB:    ${p.github}
║
║  STACK:     ${p.stack.join(' | ')}
║
║  METRICS:
║    • GMP Compliance:   ${p.metrics.gmp_compliance}
║    • Replicas:         ${p.metrics.replicas} (High Availability)
║
║  FEATURES:
║    • FDA 21 CFR Part 11 compliant
║    • Real-time equipment temperature monitoring
║    • Reactor operations logging
║    • Automated compliance scoring
║    • Integrated with Grafana monitoring
╚══════════════════════════════════════════════════════════════════╝`;
        } else if (arg === 'contact.txt' || arg === 'contact') {
          output = `
# Contact Information

Email:    contact@jagdevops.com
LinkedIn: linkedin.com/in/jaime-gabriels-643132386
GitHub:   github.com/GABRIELS562
Website:  jagdevops.com

# Live Infrastructure
LIMS:     lims.jagdevops.co.za
Finance:  finance.jagdevops.co.za
Pharma:   pharma.jagdevops.co.za
`;
        } else if (arg === 'resume.pdf') {
          output = `[Binary file - use 'open resume' to download]`;
        } else if (arg === '.bashrc') {
          output = `# ~/.bashrc - Jaime's DevOps Environment
export PS1="\\[\\e[32m\\]\\u@jagdevops\\[\\e[0m\\]:\\[\\e[34m\\]\\w\\[\\e[0m\\]\\$ "
alias k='kubectl'
alias d='docker'
alias tf='terraform'
alias g='git'

# Production shortcuts
alias lims='curl -s https://lims.jagdevops.co.za/api/health'
alias finance='curl -s https://finance.jagdevops.co.za/health'
alias pharma='curl -s https://pharma.jagdevops.co.za/health'`;
        } else {
          output = `cat: ${arg || '<file>'}: No such file or directory`;
        }
        break;

      case 'cd':
        output = `Changed directory to ${arg || '~'}`;
        break;

      case 'projects':
        output = `
┌─────────────────────────────────────────────────────────────────┐
│                    PRODUCTION PROJECTS                          │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  🧬 LIMS DNA Analysis          🟢 LIVE                          │
│     └─ lims.jagdevops.co.za                                     │
│     └─ 12-stage pipeline | 120+ samples/hr | v3.0.0             │
│                                                                 │
│  💹 Finance Trading Platform   🟢 LIVE                          │
│     └─ finance.jagdevops.co.za                                  │
│     └─ <8ms latency | 2 replicas | ArgoCD GitOps                │
│                                                                 │
│  💊 Pharma Manufacturing       🟢 LIVE                          │
│     └─ pharma.jagdevops.co.za                                   │
│     └─ FDA 21 CFR Part 11 | GMP 94% | 2 replicas                │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘

Type 'cat <project>' for details or 'open <project>' to visit`;
        break;

      case 'skills':
        output = `
┌─────────────────────────────────────────────────────────────────┐
│                    TECHNICAL SKILLS                             │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  CLOUD & IaC                                                    │
│  ├── AWS          ████████████████████░░  (SAA Certified)       │
│  ├── Terraform    ████████████████████░░  (Certified)           │
│  └── Ansible      ████████████████░░░░░░                        │
│                                                                 │
│  CONTAINERS & ORCHESTRATION                                     │
│  ├── Docker       ████████████████████░░                        │
│  ├── Kubernetes   ████████████████░░░░░░  (CKA Pending)         │
│  ├── K3s          ████████████████████░░                        │
│  └── Helm         ████████████████░░░░░░                        │
│                                                                 │
│  CI/CD & GITOPS                                                 │
│  ├── Jenkins      ████████████████████░░                        │
│  ├── ArgoCD       ████████████████████░░                        │
│  └── GitHub Actions ██████████████░░░░░░                        │
│                                                                 │
│  MONITORING                                                     │
│  ├── Prometheus   ████████████████████░░                        │
│  ├── Grafana      ████████████████████░░                        │
│  └── Loki         ████████████████░░░░░░                        │
│                                                                 │
│  LANGUAGES                                                      │
│  ├── Python       ████████████████████░░  (PCAP Certified)      │
│  ├── JavaScript   ████████████████░░░░░░                        │
│  └── Bash         ████████████████████░░                        │
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
│  ✅ AWS Solutions Architect Associate        2025               │
│  ✅ HashiCorp Terraform Associate            2025               │
│  ✅ PCAP Python Programming                  2024               │
│                                                                 │
│  🔄 Certified Kubernetes Administrator       Dec 2025           │
│  🔄 Certified Kubernetes Security (CKS)      Feb 2026           │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘`;
        break;

      case 'contact':
        output = `
┌─────────────────────────────────────────────────────────────────┐
│                    CONTACT                                      │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  📧 Email:     contact@jagdevops.com                            │
│  💼 LinkedIn:  linkedin.com/in/jaime-gabriels-643132386         │
│  🐙 GitHub:    github.com/GABRIELS562                           │
│  🌐 Website:   jagdevops.com                                    │
│                                                                 │
│  LIVE INFRASTRUCTURE:                                           │
│  ├── lims.jagdevops.co.za                                       │
│  ├── finance.jagdevops.co.za                                    │
│  └── pharma.jagdevops.co.za                                     │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘`;
        break;

      case 'kubectl':
        if (arg.includes('get pods') || arg.includes('get po')) {
          output = `NAMESPACE   NAME                              READY   STATUS    RESTARTS   AGE
default     lims-frontend-7f8d4c6b9-x2k5j     1/1     Running   0          29h
default     lims-backend-5c9f8d7a6-m3n8p      1/1     Running   0          29h
default     finance-app-56495469d6-b84tx      2/2     Running   1          3d10h
default     finance-app-56495469d6-zsb5b      2/2     Running   1          3d10h
default     pharma-app-67446f5dd9-8dx87       2/2     Running   1          3d10h
default     pharma-app-67446f5dd9-wbdjm       2/2     Running   1          3d10h
default     pharma-frontend-7fdd56f4ff-9h92k  2/2     Running   1          3d10h
default     postgres-6b5b5699f7-j9z7m         1/1     Running   1          3d20h`;
        } else if (arg.includes('get svc') || arg.includes('get services')) {
          output = `NAME              TYPE        CLUSTER-IP      PORT(S)          AGE
lims-frontend     ClusterIP   10.43.89.123    80/TCP           29h
lims-backend      ClusterIP   10.43.156.78    3001/TCP         29h
finance-app       NodePort    10.43.194.224   8000:30003/TCP   3d10h
pharma-app        NodePort    10.43.12.46     8000:30002/TCP   3d10h`;
        } else if (arg.includes('get nodes')) {
          output = `NAME          STATUS   ROLES           AGE    VERSION
server1       Ready    control-plane   271d   v1.29.15
server2       Ready    <none>          271d   v1.29.15`;
        } else {
          output = `kubectl: command requires arguments. Try 'kubectl get pods'`;
        }
        break;

      case 'docker':
        if (arg.includes('ps')) {
          output = `CONTAINER ID   IMAGE                    STATUS         NAMES
a1b2c3d4e5f6   lims-frontend:latest     Up 29 hours    lims-frontend
b2c3d4e5f6g7   lims-backend:latest      Up 29 hours    lims-backend
c3d4e5f6g7h8   postgres:16              Up 29 hours    lims-postgres
d4e5f6g7h8i9   prom/prometheus:latest   Up 10 hours    portfolio-prometheus
e5f6g7h8i9j0   grafana/grafana:latest   Up 29 hours    portfolio-grafana
f6g7h8i9j0k1   grafana/loki:latest      Up 29 hours    portfolio-loki
g7h8i9j0k1l2   jenkins/jenkins:lts      Up 28 hours    jenkins`;
        } else {
          output = `docker: command requires arguments. Try 'docker ps'`;
        }
        break;

      case 'systemctl':
        if (arg.includes('status')) {
          output = `● jagdevops.service - JAG DevOps Infrastructure
     Loaded: loaded (/etc/systemd/system/jagdevops.service; enabled)
     Active: active (running) since Fri 2026-05-23 15:59:00 UTC; 1 day ago
   Main PID: 1234 (docker)
      Tasks: 47
     Memory: 2.1G
        CPU: 4h 23min
     CGroup: /system.slice/jagdevops.service
             ├─ jenkins (running)
             ├─ prometheus (running)
             ├─ grafana (running)
             └─ k3s (running)

May 24 19:50:42 server1 systemd[1]: jagdevops.service: All systems operational`;
        } else {
          output = `systemctl: try 'systemctl status'`;
        }
        break;

      case 'open':
        if (arg === 'lims') {
          window.open('https://lims.jagdevops.co.za', '_blank');
          output = `Opening https://lims.jagdevops.co.za in browser...`;
        } else if (arg === 'finance') {
          window.open('https://finance.jagdevops.co.za', '_blank');
          output = `Opening https://finance.jagdevops.co.za in browser...`;
        } else if (arg === 'pharma') {
          window.open('https://pharma.jagdevops.co.za', '_blank');
          output = `Opening https://pharma.jagdevops.co.za in browser...`;
        } else if (arg === 'github') {
          window.open('https://github.com/GABRIELS562', '_blank');
          output = `Opening https://github.com/GABRIELS562 in browser...`;
        } else if (arg === 'linkedin') {
          window.open('https://linkedin.com/in/jaime-gabriels-643132386', '_blank');
          output = `Opening LinkedIn profile...`;
        } else if (arg === 'resume') {
          window.open('/Jaime-Gabriels-DevOps-Resume.pdf', '_blank');
          output = `Downloading resume...`;
        } else {
          output = `open: valid targets: lims, finance, pharma, github, linkedin, resume`;
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
        output = `[sudo] password for jaime:
Sorry, user jaime is not allowed to execute '${arg}' as root.
Just kidding - this is a portfolio terminal! 😄`;
        break;

      case 'rm':
        if (arg.includes('-rf')) {
          output = `Nice try! 🛡️ This portfolio is protected.`;
        } else {
          output = `rm: cannot remove '${arg}': Permission denied`;
        }
        break;

      case 'vim':
      case 'nano':
      case 'vi':
        output = `${command}: opening editor... just kidding, try 'cat' instead!`;
        break;

      case 'curl':
        if (arg.includes('lims') || arg.includes('finance') || arg.includes('pharma')) {
          output = `{"status":"healthy","message":"Visit the live site with 'open <project>'"}`;
        } else {
          output = `curl: try 'curl https://lims.jagdevops.co.za/api/health'`;
        }
        break;

      case 'ping':
        output = `PING ${arg || 'jagdevops.co.za'} (203.0.113.50): 56 data bytes
64 bytes from 203.0.113.50: icmp_seq=0 ttl=64 time=0.042 ms
64 bytes from 203.0.113.50: icmp_seq=1 ttl=64 time=0.038 ms
64 bytes from 203.0.113.50: icmp_seq=2 ttl=64 time=0.041 ms
--- ${arg || 'jagdevops.co.za'} ping statistics ---
3 packets transmitted, 3 packets received, 0.0% packet loss`;
        break;

      case 'htop':
      case 'top':
        output = `
  PID USER      PR  NI    VIRT    RES    SHR S  %CPU  %MEM     TIME+ COMMAND
 1234 jaime     20   0 2048000 512000  32000 S   2.3   6.4   4:23.45 jenkins
 2345 jaime     20   0 1024000 256000  16000 S   1.1   3.2   2:15.67 grafana
 3456 jaime     20   0  512000 128000   8000 S   0.8   1.6   1:45.23 prometheus
 4567 jaime     20   0  256000  64000   4000 S   0.3   0.8   0:30.12 loki
 5678 jaime     20   0  128000  32000   2000 S   0.1   0.4   0:15.34 node-exporter

Press 'q' to quit (just kidding, this is static)`;
        break;

      case 'date':
        output = new Date().toString();
        break;

      case 'echo':
        output = arg || '';
        break;

      case 'cowsay':
        const message = arg || 'Moo! Hire Jaime!';
        output = `
 ${'_'.repeat(message.length + 2)}
< ${message} >
 ${'-'.repeat(message.length + 2)}
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||`;
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
      // Basic tab completion
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
