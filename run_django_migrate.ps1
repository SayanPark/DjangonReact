# PowerShell script to set PYTHONPATH and run Django migrate command

$projectRoot = Resolve-Path .\backend
$env:PYTHONPATH = $projectRoot.Path

Write-Host "PYTHONPATH set to $env:PYTHONPATH"

python $projectRoot\manage.py migrate
