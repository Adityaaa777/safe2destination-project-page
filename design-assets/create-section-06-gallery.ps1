Add-Type -AssemblyName System.Drawing
$ErrorActionPreference = 'Stop'

$design = $PSScriptRoot
$assets = Join-Path (Split-Path $design -Parent) 'public/assets/section-06-gallery'
New-Item -ItemType Directory -Path $assets -Force | Out-Null

function Crop-Image($source, $destination, $x, $y, $width, $height) {
  $bitmap = [System.Drawing.Bitmap]::new($source)
  try {
    $output = [System.Drawing.Bitmap]::new($width, $height)
    try {
      $graphics = [System.Drawing.Graphics]::FromImage($output)
      try {
        $graphics.DrawImage($bitmap, [System.Drawing.Rectangle]::new(0, 0, $width, $height), [System.Drawing.Rectangle]::new($x, $y, $width, $height), [System.Drawing.GraphicsUnit]::Pixel)
      } finally { $graphics.Dispose() }
      $output.Save($destination, [System.Drawing.Imaging.ImageFormat]::Png)
    } finally { $output.Dispose() }
  } finally { $bitmap.Dispose() }
}

$leftTop = Join-Path $design 'section-06-2x-left-top.jpg'
$leftBottom = Join-Path $design 'section-06-2x-left-bottom.jpg'
$rightTop = Join-Path $design 'section-06-2x-right-top.jpg'
$rightBottom = Join-Path $design 'section-06-2x-right-bottom.jpg'

Crop-Image $leftTop (Join-Path $assets 'driver-online.png') 603 94 498 612
Crop-Image $leftBottom (Join-Path $assets 'collect-cash.png') 603 34 498 1050
Crop-Image $rightBottom (Join-Path $assets 'monthly-ride-pass.png') 99 488 498 596
Crop-Image $rightTop (Join-Path $assets 'confirm-enrollment.png') 645 94 498 612
Crop-Image $rightBottom (Join-Path $assets 'active-monthly-ride.png') 645 34 498 1050
Crop-Image $rightTop (Join-Path $assets 'enrollment-success.png') 1191 94 388 976
Crop-Image $rightBottom (Join-Path $assets 'monthly-requests.png') 1191 398 388 686

# Join two overlapping 200% views of the tall income screen. No resampling.
$top = [System.Drawing.Bitmap]::new($rightTop)
$bottom = [System.Drawing.Bitmap]::new($rightBottom)
$output = [System.Drawing.Bitmap]::new(498, 1056)
try {
  $graphics = [System.Drawing.Graphics]::FromImage($output)
  try {
    $graphics.DrawImage($top, [System.Drawing.Rectangle]::new(0, 0, 498, 806), [System.Drawing.Rectangle]::new(99, 94, 498, 806), [System.Drawing.GraphicsUnit]::Pixel)
    $graphics.DrawImage($bottom, [System.Drawing.Rectangle]::new(0, 806, 498, 250), [System.Drawing.Rectangle]::new(99, 180, 498, 250), [System.Drawing.GraphicsUnit]::Pixel)
  } finally { $graphics.Dispose() }
  $output.Save((Join-Path $assets 'monthly-income.png'), [System.Drawing.Imaging.ImageFormat]::Png)
} finally { $top.Dispose(); $bottom.Dispose(); $output.Dispose() }
