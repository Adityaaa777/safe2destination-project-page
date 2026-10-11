import type { ReactNode } from "react"
import "./section02-cover.css"

const assetRoot = "/assets/section-02-cover"

function PhoneShell({ className, children }: { className: string; children: ReactNode }) {
  return (
    <div className={`safe-cover-phone ${className}`}>
      <div className="safe-cover-phone-screen">{children}</div>
      <span className="safe-cover-phone-notch" />
    </div>
  )
}

function StatusBar() {
  return <div className="safe-cover-status"><span>09:30 PM</span><span>● ▪ ▰</span></div>
}

function TripPhone() {
  return (
    <PhoneShell className="safe-cover-phone--trip">
      <img className="safe-cover-trip-map" src={`${assetRoot}/trip-map.png`} alt="" />
      <span className="safe-cover-map-pill">Ride in Progress</span>
      <div className="safe-cover-trip-details"><b>ETA : 15 min</b><span>5.2 km Left</span><em>Both Sides</em></div>
      <div className="safe-cover-trip-points"><span>📍 Pickup</span><span>● Drop</span></div>
    </PhoneShell>
  )
}

function CashPhone() {
  return (
    <PhoneShell className="safe-cover-phone--cash">
      <div className="safe-cover-cash-content"><p>How would you like to pay?</p><div><span>▣</span> Cash <i>○</i></div></div>
    </PhoneShell>
  )
}

function HomePhone() {
  return (
    <PhoneShell className="safe-cover-phone--home">
      <img className="safe-cover-home-screen" src="/assets/user-home.png" alt="" />
    </PhoneShell>
  )
}

function DriverOfflinePhone() {
  return (
    <PhoneShell className="safe-cover-phone--driver-offline">
      <StatusBar />
      <div className="safe-cover-driver-header"><img src={`${assetRoot}/brand-logo.jpeg`} alt="" /><div><strong>Ayaan Malviya</strong><small>Driver</small></div><span>Offline</span></div>
      <img className="safe-cover-offline-art" src={`${assetRoot}/offline-illustration.png`} alt="" />
      <div className="safe-cover-offline-message"><strong>You&apos;re Offline</strong><small>Go online to start accepting rides.</small></div>
      <span className="safe-cover-green-button">Go Online</span>
      <div className="safe-cover-update"><strong>Today&apos;s Update</strong><div>Today&apos;s Earning<br /><b>₹1000.00</b></div><ul><li>Online<br /><b>₹500</b></li><li>Cash<br /><b>₹500</b></li></ul></div>
      <div className="safe-cover-bottom-nav">● Home　♧　▣　♙</div>
    </PhoneShell>
  )
}

function DriverMapPhone() {
  return (
    <PhoneShell className="safe-cover-phone--driver-map">
      <StatusBar />
      <div className="safe-cover-driver-map"><img src={`${assetRoot}/street-map.png`} alt="" /><span className="safe-cover-book-pill">Book Ride</span><span className="safe-cover-map-online">Go Online</span></div>
      <div className="safe-cover-driver-tabs">♧ <span>Driver</span>　　◉ <span>Earnings</span></div>
      <img className="safe-cover-online-art" src={`${assetRoot}/online-illustration.png`} alt="" />
      <div className="safe-cover-map-offline"><strong>You&apos;re Offline</strong><small>Go online to start accepting rides.</small></div>
      <span className="safe-cover-red-button">Go Offline</span>
    </PhoneShell>
  )
}

function MonthlyRidesPhone() {
  return (
    <PhoneShell className="safe-cover-phone--monthly-rides">
      <StatusBar />
      <div className="safe-cover-monthly-title">‹ &nbsp; Monthly Rides</div>
      <div className="safe-cover-segments"><span>Offline</span><b>Monthly</b><span>Regular</span></div>
      <h3>Monthly Available Rides</h3>
      <div className="safe-cover-ride-card"><strong>Ritesh Patel</strong><small>Monthly Ride</small><img src={`${assetRoot}/trip-map.png`} alt="" /><p>Morning Pickup 9AM<br />Evening Pickup 6PM</p></div>
    </PhoneShell>
  )
}

function MonthlyPlanPhone() {
  return (
    <PhoneShell className="safe-cover-phone--monthly-plan">
      <StatusBar />
      <div className="safe-cover-driver-header"><img src={`${assetRoot}/brand-logo.jpeg`} alt="" /><div><strong>Ayaan Malviya</strong><small>Driver</small></div><span>Offline</span></div>
      <div className="safe-cover-segments"><span>Offline</span><b>Monthly</b><span>Regular</span></div>
      <h3>Month Scheduled Rides</h3>
      <div className="safe-cover-plan-illustration"><span className="safe-cover-calendar">▦</span><span className="safe-cover-clock">◷</span><span className="safe-cover-car" /></div>
      <span className="safe-cover-enroll">Enroll Now</span>
      <div className="safe-cover-plan-list"><strong>Monthly Fixed Rides Plan</strong><p>✓ Pre-scheduled rides<br />✓ Fixed pickup &amp; drop locations<br />✓ Same time slots throughout the month</p></div>
    </PhoneShell>
  )
}

/** Standalone Safe 2 Destination cover, Figma node 65:547. */
export default function Section02Cover() {
  return (
    <section className="safe-section-02" aria-labelledby="safe-cover-title" data-node-id="65:547">
      <img className="safe-section-02-artwork" src={`${assetRoot}/cover-artwork.png`} alt="" />
      <div className="safe-section-02-copy">
        <span className="safe-section-02-kicker">Ride Booking Application</span>
        <h1 id="safe-cover-title">Safe 2 Destination</h1>
        <p>Safe to Destination makes everyday travel simple and secure<br />with easy ride booking, trusted drivers, and real-time tracking</p>
      </div>
      <div className="safe-section-02-phones" aria-hidden="true">
        <TripPhone />
        <CashPhone />
        <HomePhone />
        <DriverOfflinePhone />
        <DriverMapPhone />
        <MonthlyRidesPhone />
        <MonthlyPlanPhone />
      </div>
    </section>
  )
}
