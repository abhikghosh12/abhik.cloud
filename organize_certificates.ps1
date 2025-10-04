# Organize Certificates Directory
# This script will organize all certification files into a clean structure

$publicCerts = "C:\git\abhik.cloud\public\Certificates"
$distCerts = "C:\git\abhik.cloud\dist\Certificates"

Write-Host "`n╔════════════════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "║   CERTIFICATE FILES ORGANIZATION SCRIPT    ║" -ForegroundColor Cyan
Write-Host "╚════════════════════════════════════════════════╝`n" -ForegroundColor Cyan

# Create new organized folder structure
$folders = @(
    "$publicCerts\badges",
    "$publicCerts\logos", 
    "$publicCerts\pdfs",
    "$publicCerts\resumes"
)

Write-Host "📁 Creating organized folder structure..." -ForegroundColor Yellow
foreach($folder in $folders) {
    if(!(Test-Path $folder)) {
        New-Item -ItemType Directory -Path $folder -Force | Out-Null
        Write-Host "   ✓ Created: $($folder.Replace($publicCerts + '\',''))" -ForegroundColor Green
    }
}

Write-Host "`n📋 Organizing files..." -ForegroundColor Yellow

# Move certification badges
Write-Host "`n1️⃣  Moving Certification Badges..." -ForegroundColor Cyan
$badges = @(
    "aws-cloud-practitioner.png",
    "aws-developer-associate.png",
    "aws-solutions-architect-associate.png",
    "aws-solutions-architect-professional.png",
    "aws-sysops-administrator-associate.png",
    "azure-fundamentals.png",
    "cka-certified-kubernetes-administrator.png",
    "cks-certified-kubernetes-security-specialist.png",
    "safe-6-architect.png",
    "terraform-associate-003.png"
)

foreach($badge in $badges) {
    $source = "$publicCerts\$badge"
    if(Test-Path $source) {
        Move-Item $source "$publicCerts\badges\" -Force
        Write-Host "   ✓ $badge" -ForegroundColor White
    }
}

# Move company logos
Write-Host "`n2️⃣  Moving Company Logos..." -ForegroundColor Cyan
$logos = @(
    "capgemini.jpg",
    "university.png",
    "una.png",
    "uniklinik.png",
    "researchgate.png"
)

foreach($logo in $logos) {
    $source = "$publicCerts\$logo"
    if(Test-Path $source) {
        Move-Item $source "$publicCerts\logos\" -Force
        Write-Host "   ✓ $logo" -ForegroundColor White
    }
}

# Move and rename PDF certificates
Write-Host "`n3️⃣  Moving & Renaming Certificate PDFs..." -ForegroundColor Cyan
$pdfMoves = @{
    "AWS Certified Cloud Practitioner.pdf" = "aws-cloud-practitioner.pdf"
    "AWS certified Solution Architect- Associate.pdf" = "aws-solutions-architect-associate.pdf"
    "Exam AZ-900  Microsoft Azure Fundamentals.pdf" = "azure-fundamentals.pdf"
    "Certified Kubernetes Administrator (CKA).pdf" = "cka-kubernetes-administrator.pdf"
    "Terraform Associate.pdf" = "terraform-associate.pdf"
    "1690817489161.pdf" = "excellence-award.pdf"
}

foreach($old in $pdfMoves.Keys) {
    $source = "$publicCerts\$old"
    $dest = "$publicCerts\pdfs\$($pdfMoves[$old])"
    if(Test-Path $source) {
        Move-Item $source $dest -Force
        Write-Host "   ✓ $old → $($pdfMoves[$old])" -ForegroundColor White
    }
}

# Move resume files
Write-Host "`n4️⃣  Moving Resume Files..." -ForegroundColor Cyan
$resumes = @(
    "EN_Ghosh_Abhik.pdf",
    "Lebenslauf_Ghosh_Abhik.pdf",
    "50477187_EN_Ghosh_Abhik_Short.pdf"
)

foreach($resume in $resumes) {
    $source = "$publicCerts\$resume"
    if(Test-Path $source) {
        Move-Item $source "$publicCerts\resumes\" -Force
        Write-Host "   ✓ $resume" -ForegroundColor White
    }
}

# Check for M.SC.pdf in dist and copy if exists
if(Test-Path "$distCerts\M.SC.pdf") {
    Write-Host "`n   ℹ️  Found M.SC.pdf in dist, copying to pdfs..." -ForegroundColor Yellow
    Copy-Item "$distCerts\M.SC.pdf" "$publicCerts\pdfs\masters-degree.pdf" -Force
    Write-Host "   ✓ M.SC.pdf → masters-degree.pdf" -ForegroundColor White
}

if(Test-Path "$distCerts\excellence_award.pdf") {
    Copy-Item "$distCerts\excellence_award.pdf" "$publicCerts\pdfs\excellence-award.pdf" -Force -ErrorAction SilentlyContinue
}

Write-Host "`n5️⃣  Cleaning up dist/Certificates duplicates..." -ForegroundColor Cyan

# Remove duplicate PDFs from dist
$distPdfs = Get-ChildItem "$distCerts\*.pdf" | Where-Object {$_.Name -notmatch 'M.SC|excellence_award'}
foreach($pdf in $distPdfs) {
    Remove-Item $pdf.FullName -Force
    Write-Host "   ✗ Removed duplicate: $($pdf.Name)" -ForegroundColor Red
}

# Remove duplicate PNGs from dist
Get-ChildItem "$distCerts\*.png" | Remove-Item -Force
Get-ChildItem "$distCerts\*.jpg" | Remove-Item -Force
Write-Host "   ✗ Removed duplicate badges and logos from dist" -ForegroundColor Red

Write-Host "`n╔════════════════════════════════════════════════╗" -ForegroundColor Green
Write-Host "║          ✅ ORGANIZATION COMPLETE!          ║" -ForegroundColor Green
Write-Host "╚════════════════════════════════════════════════╝`n" -ForegroundColor Green

Write-Host "📊 New Structure:" -ForegroundColor Yellow
Write-Host "   • badges/   - 10 certification badge images"
Write-Host "   • logos/    - 5 company logos"
Write-Host "   • pdfs/     - 7 certificate PDFs"
Write-Host "   • resumes/  - 3 resume files"
Write-Host "   • dist/     - 34 SVG tech icons (kept for future use)"

Write-Host "`n⚠️  IMPORTANT: Update image paths in your code!" -ForegroundColor Yellow
Write-Host "   Old: /Certificates/capgemini.jpg"
Write-Host "   New: /Certificates/logos/capgemini.jpg"
Write-Host ""
