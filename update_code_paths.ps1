# Auto-Update Code Paths Script
# Updates all image and PDF paths to new organized structure

$files = @(
    "C:\git\abhik.cloud\app\components\DynamicResume.tsx",
    "C:\git\abhik.cloud\app\resume\page.tsx",
    "C:\git\abhik.cloud\app\certificates\page.tsx"
)

Write-Host "`n╔════════════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "║   UPDATING CODE PATHS TO NEW STRUCTURE ║" -ForegroundColor Cyan
Write-Host "╚════════════════════════════════════════════╝`n" -ForegroundColor Cyan

foreach($file in $files) {
    if(!(Test-Path $file)) {
        Write-Host "⊘ Skipping (not found): $($file.Split('\')[-1])" -ForegroundColor DarkGray
        continue
    }
    
    Write-Host "📝 Updating: $($file.Split('\')[-1])" -ForegroundColor Yellow
    
    $content = Get-Content $file -Raw
    $originalContent = $content
    $changes = 0
    
    # Update company logos
    $patterns = @{
        '/Certificates/capgemini\.jpg' = '/Certificates/logos/capgemini.jpg'
        '/Certificates/university\.png' = '/Certificates/logos/university.png'
        '/Certificates/una\.png' = '/Certificates/logos/una.png'
        '/Certificates/uniklinik\.png' = '/Certificates/logos/uniklinik.png'
        '/Certificates/researchgate\.png' = '/Certificates/logos/researchgate.png'
    }
    
    foreach($old in $patterns.Keys) {
        if($content -match $old) {
            $content = $content -replace $old, $patterns[$old]
            $changes++
            Write-Host "   ✓ Updated logo path: $old" -ForegroundColor Green
        }
    }
    
    # Update certification badges
    $badgePattern = '/Certificates/(aws-|azure-|cka-|cks-|safe-|terraform-)([^"''`\s]+\.png)'
    if($content -match $badgePattern) {
        $content = $content -creplace '/Certificates/(aws-|azure-|cka-|cks-|safe-|terraform-)([^"''`\s]+\.png)', '/Certificates/badges/$1$2'
        $changes++
        Write-Host "   ✓ Updated badge paths" -ForegroundColor Green
    }
    
    # Update resume PDFs
    $resumePatterns = @{
        '/Certificates/EN_Ghosh_Abhik_Short\.pdf' = '/Certificates/resumes/EN_Ghosh_Abhik_Short.pdf'
        '/Certificates/EN_Ghosh_Abhik\.pdf' = '/Certificates/resumes/EN_Ghosh_Abhik.pdf'
        '/Certificates/Lebenslauf_Ghosh_Abhik\.pdf' = '/Certificates/resumes/Lebenslauf_Ghosh_Abhik.pdf'
        '/Certificates/50477187_EN_Ghosh_Abhik_Short\.pdf' = '/Certificates/resumes/50477187_EN_Ghosh_Abhik_Short.pdf'
    }
    
    foreach($old in $resumePatterns.Keys) {
        if($content -match $old) {
            $content = $content -replace $old, $resumePatterns[$old]
            $changes++
            Write-Host "   ✓ Updated resume path: $old" -ForegroundColor Green
        }
    }
    
    # Update certificate PDFs
    $pdfPatterns = @{
        '/Certificates/AWS Certified Cloud Practitioner\.pdf' = '/Certificates/pdfs/aws-cloud-practitioner.pdf'
        '/Certificates/AWS certified Solution Architect- Associate\.pdf' = '/Certificates/pdfs/aws-solutions-architect-associate.pdf'
        '/Certificates/Exam AZ-900\s+Microsoft Azure Fundamentals\.pdf' = '/Certificates/pdfs/azure-fundamentals.pdf'
        '/Certificates/Certified Kubernetes Administrator \(CKA\)\.pdf' = '/Certificates/pdfs/cka-kubernetes-administrator.pdf'
        '/Certificates/Terraform Associate\.pdf' = '/Certificates/pdfs/terraform-associate.pdf'
        '/Certificates/1690817489161\.pdf' = '/Certificates/pdfs/excellence-award.pdf'
        '/Certificates/M\.SC\.pdf' = '/Certificates/pdfs/masters-degree.pdf'
    }
    
    foreach($old in $pdfPatterns.Keys) {
        if($content -match $old) {
            $content = $content -replace $old, $pdfPatterns[$old]
            $changes++
            Write-Host "   ✓ Updated PDF path: $old" -ForegroundColor Green
        }
    }
    
    if($changes -gt 0) {
        # Create backup
        $backupFile = $file + ".backup"
        Copy-Item $file $backupFile -Force
        
        # Save updated content
        $content | Set-Content $file -NoNewline
        Write-Host "   💾 Saved $changes changes (backup created)" -ForegroundColor Cyan
    } else {
        Write-Host "   ℹ️  No changes needed" -ForegroundColor Gray
    }
    Write-Host ""
}

Write-Host "╔════════════════════════════════════════════╗" -ForegroundColor Green
Write-Host "║         ✅ CODE UPDATE COMPLETE!        ║" -ForegroundColor Green
Write-Host "╚════════════════════════════════════════════╝`n" -ForegroundColor Green

Write-Host "📝 Backup files created with .backup extension" -ForegroundColor Yellow
Write-Host "🔍 Review changes before building/deploying" -ForegroundColor Yellow
Write-Host "`n🚀 Next steps:" -ForegroundColor Cyan
Write-Host "   1. Review the changes in your code"
Write-Host "   2. Test locally: npm run dev"
Write-Host "   3. Build: npm run build"
Write-Host "   4. Deploy!"
Write-Host ""
