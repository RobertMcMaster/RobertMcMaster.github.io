---
title: NetScan-Pro — Building a Bash Network Tool
date: 2024-07-20
description: How I built a Bash-based network scanning tool that hit 80+ GitHub stars and what I learned about shell scripting along the way.
tags: [Bash, Linux, Networking, Open Source]
---

NetScan-Pro started as a personal utility — I was tired of remembering `nmap` flags and switching between tools for different network tasks. I wanted one script that did it all with a clean output. It ended up hitting 80+ stars on GitHub, which surprised me.

## The Core Features

The tool wraps four main operations behind a simple menu:

- **Live host discovery** — pings a subnet range and lists responsive hosts
- **Port scanning** — calls `nmap` with sensible defaults
- **Traceroute** — visualises the hop path to a target
- **Ping test** — quick latency check with packet loss stats

The ASCII banner is just `figlet` piped through `lolcat`, but people seem to like it.

## What Bash Is Good At

Bash shines for gluing existing Unix tools together. Almost everything in NetScan-Pro is orchestration — calling `nmap`, `ping`, `traceroute`, `arp-scan` and formatting their output. The script itself adds the menu logic, input validation, and coloured formatting.

```bash
function scan_ports() {
  local target=$1
  echo -e "${CYAN}Scanning ports on ${target}...${RESET}"
  nmap -sV --open -T4 "$target" 2>/dev/null
}
```

## Lessons Learned

**Always quote your variables.** `$target` becoming two arguments because of a space in a hostname was a fun bug to track down.

**Validate input early.** A bad IP passed to `nmap` produces a confusing error. Checking the format with a regex before calling any tool gives much friendlier output.

**`set -e` is your friend.** Exiting on the first error prevents half-completed operations that leave the system in a weird state.

The project is open source — contributions welcome if you want to add features like subnet CIDR parsing or JSON output.
