---
layout   : production
permalink: production/deliver/timesheet/
# Custom Page Variables
# ─────────────────────
title: Timesheet
---

Taak  | Tijd
------|-------:
{%- assign total = 0.0 %}
{%- for item in site.data.timesheet %}
{%- assign total = total | plus: item.time %}
{{ item.task }} | {{ item.time | floor }}.{{ item.time | times: 100 | modulo: 100 | plus: 100 | round | split: 1 }}{% if 0 == item.time | modulo: 100 %}0{% endif %}
{%- endfor %}
======|=======
Totaal| {{ total | floor }}.{{ total | times: 100 | modulo: 100 | plus: 100 | round | split: 1 }}

{:.table.table--primary}