#!/bin/bash

echo "Starting PULSE website server..."
echo "Website will be available at: http://localhost:8000"
echo "Press Ctrl+C to stop the server"
echo ""

# Check if Python is available
if command -v python3 &> /dev/null; then
    python3 -m http.server 8000
elif command -v python &> /dev/null; then
    python -m SimpleHTTPServer 8000
else
    echo "Python is not installed. Please install Python or use another web server."
    exit 1
fi