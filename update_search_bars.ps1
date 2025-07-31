# PowerShell script to update search bars for mobile compatibility

Get-ChildItem -Recurse -Filter "*.html" | ForEach-Object {
    $content = Get-Content $_.FullName -Raw
    
    # Replace search bar inputs to add mobile-friendly attributes
    $newContent = $content -replace 'placeholder="Search items\.\.">', 'placeholder="Search items.." autocomplete="off" autocapitalize="none" spellcheck="false">'
    
    # Alternative pattern for variations
    $newContent = $newContent -replace 'placeholder="Search items\.\." />', 'placeholder="Search items.." autocomplete="off" autocapitalize="none" spellcheck="false" />'
    
    # Write the updated content back to the file
    Set-Content -Path $_.FullName -Value $newContent
}

Write-Host "Updated all HTML files with mobile-friendly search bar attributes"
