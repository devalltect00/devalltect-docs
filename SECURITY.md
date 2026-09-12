<!-- SECURITY.md -->

# 🔐 Security Policy

---

## 📦 Supported Versions

Security updates are provided for:

| Version               | Supported |
| --------------------- | --------- |
| Latest                | ✅         |
| Active Major Versions | ✅         |
| Deprecated Versions   | ❌         |

Older versions may contain known vulnerabilities and are not guaranteed to receive security fixes.

---

## 🚨 Reporting a Vulnerability

If you discover a security issue:

1. **Do NOT open a public issue**
2. Report the vulnerability privately to the maintainer
3. Include as much detail as possible

Recommended information:

* Description of the issue
* Steps to reproduce
* Potential impact
* Proof of concept (if applicable)
* Suggested mitigation or fix

---

## 🔍 Security Scope

This repository hosts documentation generated using Docusaurus.

Relevant security concerns include:

### 📚 Documentation Content

* Malicious MDX content
* Embedded scripts
* Unsafe external links
* Untrusted third-party assets

### 🔗 Dependency Security

* Vulnerable npm packages
* Vulnerable transitive dependencies
* Supply-chain attacks

### ⚙️ CI/CD Security

* GitHub Actions workflow abuse
* GitLab CI/CD pipeline abuse
* Excessive permissions
* Secret leakage

### 🌐 Website Security

* Cross-site scripting (XSS)
* Content injection
* Unsafe redirects
* Insecure third-party integrations

---

## 🛡️ Security Guidelines

### Dependencies

* Keep dependencies up to date
* Review dependency updates before merging
* Remove unused packages

### Documentation

* Avoid embedding untrusted scripts
* Avoid embedding untrusted iframes
* Verify external links before publishing

### CI/CD

* Use least-privilege permissions
* Avoid storing secrets in source control
* Review workflow changes carefully

### Repository Management

* Protect main branch
* Require pull requests for changes
* Review external contributions

---

## 🔑 Secrets Management

Never commit:

* API keys
* Access tokens
* Passwords
* Private certificates
* Environment files containing secrets

Examples:

```text
.env
.env.production
.env.local
```

Sensitive values should be stored using:

* GitHub Secrets
* GitLab CI/CD Variables
* External secret management solutions

---

## ⚡ Response Policy

The maintainer will:

1. Investigate reported issues
2. Assess impact and severity
3. Develop and validate a fix
4. Release security updates when necessary
5. Credit reporters when appropriate

---

## 📢 Disclosure Policy

Security issues should be reported privately.

Public disclosure should occur only after:

* A fix is available, or
* The maintainer has been notified and given reasonable time to respond.

---

Thank you for helping keep this project secure.
