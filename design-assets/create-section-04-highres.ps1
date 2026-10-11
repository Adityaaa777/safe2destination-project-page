Add-Type -AssemblyName System.Drawing
$ErrorActionPreference = 'Stop'

$design = $PSScriptRoot
$project = Split-Path $design -Parent
$assets = Join-Path $project 'public/assets/section-04-gallery'

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

Crop-Image (Join-Path $design 'section-04-2x-confirmed.jpg') (Join-Path $assets 'ride-confirmed-2x.png') 68 98 464 1070
Crop-Image (Join-Path $design 'section-04-2x-renew.jpg') (Join-Path $assets 'renew-pass-2x.png') 68 516 464 592
Crop-Image (Join-Path $design 'section-04-2x-top-left.jpg') (Join-Path $assets 'reschedule-ride-2x.png') 1029 98 486 790
Crop-Image (Join-Path $design 'section-04-2x-completed.jpg') (Join-Path $assets 'ride-completed-2x.png') 1079 236 498 872
Crop-Image (Join-Path $design 'section-04-2x-top-right.jpg') (Join-Path $assets 'pass-renewed-2x.png') 1168 98 388 838

# The tall monthly pass screen spans two 200% captures. Both retain the
# original Figma pixels; the overlap aligns them without scaling either part.
$top = [System.Drawing.Bitmap]::new((Join-Path $design 'section-04-2x-top-right.jpg'))
$bottom = [System.Drawing.Bitmap]::new((Join-Path $design 'section-04-2x-bottom-right.jpg'))
$output = [System.Drawing.Bitmap]::new(620, 1660)
try {
  $graphics = [System.Drawing.Graphics]::FromImage($output)
  try {
    $graphics.DrawImage($top, [System.Drawing.Rectangle]::new(0, 0, 620, 800), [System.Drawing.Rectangle]::new(500, 98, 620, 800), [System.Drawing.GraphicsUnit]::Pixel)
    $graphics.DrawImage($bottom, [System.Drawing.Rectangle]::new(0, 800, 620, 860), [System.Drawing.Rectangle]::new(500, 230, 620, 860), [System.Drawing.GraphicsUnit]::Pixel)
  } finally { $graphics.Dispose() }
  $output.Save((Join-Path $assets 'monthly-pass-2x.png'), [System.Drawing.Imaging.ImageFormat]::Png)
} finally { $top.Dispose(); $bottom.Dispose(); $output.Dispose() }

$onboarding = Join-Path $project 'public/assets/user-onboarding.png'
$riderHomeSource = Join-Path $project 'public/assets/user-home.png'
Crop-Image $onboarding (Join-Path $assets 'rider-onboarding-hq.png') 89 294 286 509
Crop-Image $riderHomeSource (Join-Path $assets 'rider-home-left-hq.png') 89 0 286 742
Crop-Image $riderHomeSource (Join-Path $assets 'rider-home-right-hq.png') 0 0 292 620
