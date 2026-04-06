@echo off
echo Starting Mongma Studio Landing Page Server...
start http://localhost:8000
python -m http.server 8000
