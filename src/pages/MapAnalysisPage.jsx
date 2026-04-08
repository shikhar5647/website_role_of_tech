import React from 'react';
import './MapAnalysisPage.css';

export default function MapAnalysisPage() {
  React.useEffect(() => {
    // Include the script logic here
    let activeMarker = null;

    function switchTab(tab) {
      document.querySelectorAll('.tab-btn').forEach((b, i) => b.classList.remove('active'));
      document.querySelectorAll('.panel-view').forEach(v => v.classList.remove('active'));
      const tabs = ['explore', 'timeline', 'stats'];
      const idx = tabs.indexOf(tab);
      document.querySelectorAll('.tab-btn')[idx].classList.add('active');
      document.getElementById('tab-' + tab).classList.add('active');
    }

    function showLocation(id) {
      document.getElementById('defaultState').style.display = 'none';
      document.querySelectorAll('.loc-panel').forEach(p => p.style.display = 'none');
      const panel = document.getElementById('loc-' + id);
      if (panel) {
        panel.style.display = 'block';
        panel.scrollTop = 0;
      }
      switchTab('explore');
      if (activeMarker) activeMarker.classList.remove('active-marker');
      const markerEl = document.querySelector(`[data-loc="${id}"]`);
      if (markerEl) {
        markerEl.classList.add('active-marker');
        activeMarker = markerEl;
      }
    }

    function closePanel() {
      document.querySelectorAll('.loc-panel').forEach(p => p.style.display = 'none');
      document.getElementById('defaultState').style.display = 'flex';
      if (activeMarker) {
        activeMarker.classList.remove('active-marker');
        activeMarker = null;
      }
    }

    const tooltip = document.getElementById('mapTooltip');
    const markers = document.querySelectorAll('.marker-group');

    markers.forEach(marker => {
      marker.addEventListener('mouseenter', (e) => {
        const tip = marker.getAttribute('data-tip');
        if (!tip) return;
        tooltip.innerHTML = `<strong>${tip.split('—')[0]}</strong>${tip.includes('—') ? tip.split('—')[1] : ''}`;
        tooltip.classList.add('visible');
        moveTip(e);
      });
      marker.addEventListener('mousemove', moveTip);
      marker.addEventListener('mouseleave', () => tooltip.classList.remove('visible'));
    });

    function moveTip(e) {
      const rect = document.getElementById('mapContainer').getBoundingClientRect();
      let x = e.clientX - rect.left + 14;
      let y = e.clientY - rect.top - 48;
      if (x + 200 > rect.width) x = e.clientX - rect.left - 200;
      tooltip.style.left = x + 'px';
      tooltip.style.top = y + 'px';
    }

    document.querySelectorAll('.pulse-ring').forEach(ring => {
      ring.addEventListener('animationend', () => {
        ring.style.animation = 'none';
        requestAnimationFrame(() => {
          ring.style.animation = '';
        });
      });
    });

    setTimeout(() => {
      const jdh = document.getElementById('jodhpurMarker');
      if (jdh) {
        jdh.style.filter = 'brightness(1.5) drop-shadow(0 0 14px #ff9d2e)';
        setTimeout(() => { jdh.style.filter = ''; }, 2500);
      }
    }, 800);
  }, []);

  return (
    <div className="map-analysis-page">
      <div className="main">
        <div className="map-container" id="mapContainer">
          <svg className="map-svg" viewBox="0 0 680 600" xmlns="http://www.w3.org/2000/svg" id="mainSvg">
            <defs>
              <filter id="glow-blue">
                <feGaussianBlur stdDeviation="3" result="blur"/>
                <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
              </filter>
              <filter id="glow-orange">
                <feGaussianBlur stdDeviation="4" result="blur"/>
                <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
              </filter>
              <filter id="glow-soft">
                <feGaussianBlur stdDeviation="6" result="blur"/>
                <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
              </filter>
              <radialGradient id="jodhpur-glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stop-color="#ff9d2e" stop-opacity="0.4"/>
                <stop offset="100%" stop-color="#ff9d2e" stop-opacity="0"/>
              </radialGradient>
              <radialGradient id="green-glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stop-color="#4ade80" stop-opacity="0.15"/>
                <stop offset="100%" stop-color="#4ade80" stop-opacity="0"/>
              </radialGradient>
              <linearGradient id="canal-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#38a5ff"/>
                <stop offset="100%" stop-color="#00d4aa"/>
              </linearGradient>
            </defs>

            <rect x="0" y="0" width="680" height="600" fill="#030d1a"/>
            
            <ellipse cx="380" cy="460" rx="260" ry="150" fill="#1a100a" opacity="0.6"/>
            <ellipse cx="500" cy="520" rx="180" ry="100" fill="#1e1208" opacity="0.4"/>
            
            <ellipse cx="140" cy="60" rx="120" ry="70" fill="#0a1e0a" opacity="0.5"/>

            <path d="M 0,80 L 80,60 L 80,600" fill="none" stroke="#ff6b6b" stroke-width="1" stroke-dasharray="6,4" opacity="0.4"/>
            <text x="22" y="140" font-size="9" fill="#ff6b6b" font-family="Outfit,sans-serif" opacity="0.5" transform="rotate(-90,22,140)">PAKISTAN →</text>

            <text x="14" y="25" font-size="8" fill="#ff6b6b" font-family="Outfit,sans-serif" opacity="0.45">PAKISTAN</text>
            <text x="200" y="25" font-size="8" fill="#5a7fa0" font-family="Outfit,sans-serif" opacity="0.6">PUNJAB</text>
            <text x="380" y="25" font-size="9" fill="#5a7fa0" font-family="Outfit,sans-serif" opacity="0.7">R A J A S T H A N</text>
            
            <line x1="80" y1="150" x2="680" y2="150" stroke="#5a7fa0" stroke-width="0.6" stroke-dasharray="5,4" opacity="0.35"/>
            <text x="540" y="145" font-size="8" fill="#5a7fa0" font-family="Outfit,sans-serif" opacity="0.5">↑ Punjab</text>
            <text x="540" y="160" font-size="8" fill="#5a7fa0" font-family="Outfit,sans-serif" opacity="0.5">↓ Rajasthan</text>

            <ellipse cx="165" cy="215" rx="45" ry="28" fill="url(#green-glow)" className="jodhpur-zone"/>
            <ellipse cx="240" cy="275" rx="35" ry="22" fill="url(#green-glow)" className="jodhpur-zone"/>
            <ellipse cx="290" cy="330" rx="40" ry="25" fill="url(#green-glow)" className="jodhpur-zone"/>
            <circle cx="530" cy="420" r="55" fill="url(#jodhpur-glow)" className="jodhpur-zone"/>

            <path d="M 145,72 L 185,100 L 215,148 L 248,192 L 278,242 L 308,285 L 330,325 L 348,372 L 360,415 L 370,460 L 378,500" fill="none" stroke="#38a5ff" stroke-width="7" opacity="0.08"/>
            <path d="M 145,72 L 185,100 L 215,148 L 248,192 L 278,242 L 308,285 L 330,325 L 348,372 L 360,415 L 370,460 L 378,500" fill="none" stroke="#38a5ff" stroke-width="3.5" opacity="0.25"/>
            <path d="M 145,72 L 185,100 L 215,148 L 248,192 L 278,242 L 308,285 L 330,325 L 348,372 L 360,415 L 370,460 L 378,500" fill="none" stroke="url(#canal-grad)" stroke-width="2.5" className="canal-main" filter="url(#glow-blue)"/>

            <path d="M 248,192 L 200,208 L 158,225" fill="none" stroke="#4ade80" stroke-width="2.5" opacity="0.2"/>
            <path d="M 248,192 L 200,208 L 158,225" fill="none" stroke="#4ade80" stroke-width="1.5" className="canal-branch" style={{animationDelay: '0.4s'}}/>

            <path d="M 330,325 L 400,316 L 468,312" fill="none" stroke="#f5c842" stroke-width="2.5" opacity="0.2"/>
            <path d="M 330,325 L 400,316 L 468,312" fill="none" stroke="#f5c842" stroke-width="1.5" className="canal-branch" style={{animationDelay: '0.8s'}}/>

            <path d="M 348,372 L 420,386 L 488,395" fill="none" stroke="#b48bfa" stroke-width="2" opacity="0.2"/>
            <path d="M 348,372 L 420,386 L 488,395" fill="none" stroke="#b48bfa" stroke-width="1.2" className="canal-small" style={{animationDelay: '1.2s'}}/>

            <path d="M 360,415 L 400,420 L 450,422 L 490,420 L 520,418 L 530,420" fill="none" stroke="#ff9d2e" stroke-width="6" opacity="0.1"/>
            <path d="M 360,415 L 400,420 L 450,422 L 490,420 L 520,418 L 530,420" fill="none" stroke="#ff9d2e" stroke-width="3.5" opacity="0.3"/>
            <path d="M 360,415 L 400,420 L 450,422 L 490,420 L 520,418 L 530,420" fill="none" stroke="#ff9d2e" stroke-width="2" className="canal-jodhpur" filter="url(#glow-orange)"/>

            <path d="M 530,420 L 540,430 L 545,445 L 540,460" fill="none" stroke="#ff9d2e" stroke-width="1.2" className="canal-small" style={{animationDelay: '0.3s'}} opacity="0.6"/>
            <path d="M 530,420 L 548,415 L 558,420 L 555,435" fill="none" stroke="#ff9d2e" stroke-width="1" strokeDasharray="3,3" opacity="0.4"/>
            <path d="M 530,420 L 520,410 L 515,395" fill="none" stroke="#ff9d2e" stroke-width="1" strokeDasharray="3,3" opacity="0.4"/>

            <path d="M 548,415 L 560,408 L 572,404" fill="none" stroke="#fbbf24" stroke-width="1.5" className="canal-small" style={{animationDelay: '0.6s'}} opacity="0.7"/>

            <path d="M 360,415 L 432,428 L 502,438" fill="none" stroke="#4ade80" stroke-width="1.5" opacity="0.2"/>
            <path d="M 360,415 L 432,428 L 502,438" fill="none" stroke="#4ade80" stroke-width="1" className="canal-small" style={{animationDelay: '0.6s'}}/>

            <path d="M 278,242 L 235,262" fill="none" stroke="#38a5ff" stroke-width="0.8" strokeDasharray="3,4" opacity="0.3"/>
            <path d="M 308,285 L 262,300" fill="none" stroke="#38a5ff" stroke-width="0.8" strokeDasharray="3,4" opacity="0.3"/>
            <path d="M 348,372 L 302,388" fill="none" stroke="#38a5ff" stroke-width="0.8" strokeDasharray="3,4" opacity="0.3"/>

            <text x="445" y="412" font-size="9" fill="#ff9d2e" font-family="Outfit,sans-serif" font-weight="600" opacity="0.8">Water to Jodhpur →</text>

            <g className="marker-group" onClick={() => showLocation('harike')} data-tip="Harike Headworks — Canal Origin" data-loc="harike">
              <circle cx="145" cy="72" r="18" fill="#38a5ff" opacity="0" className="pulse-ring"/>
              <circle cx="145" cy="72" r="18" fill="#38a5ff" opacity="0" className="pulse-ring" style={{animationDelay: '0.6s'}}/>
              <circle cx="145" cy="72" r="10" fill="#071525" stroke="#38a5ff" stroke-width="2.5"/>
              <text x="145" y="76" textAnchor="middle" font-size="8" fill="#38a5ff" font-family="Outfit,sans-serif" font-weight="700">H</text>
              <text x="162" y="66" font-size="10" fill="#d0e8ff" font-family="Outfit,sans-serif">Harike</text>
              <text x="162" y="78" font-size="8" fill="#5a7fa0" font-family="Outfit,sans-serif">Headworks</text>
            </g>

            <g className="marker-group" onClick={() => showLocation('masitanwali')} data-tip="Masitanwali — Punjab-Rajasthan Border" data-loc="masitanwali">
              <circle cx="215" cy="148" r="15" fill="#4ade80" opacity="0" className="pulse-ring" style={{animationDelay: '0.4s'}}/>
              <circle cx="215" cy="148" r="9" fill="#071525" stroke="#4ade80" stroke-width="2"/>
              <text x="215" y="152" textAnchor="middle" font-size="8" fill="#4ade80" font-family="Outfit,sans-serif" font-weight="700">M</text>
              <text x="228" y="143" font-size="10" fill="#d0e8ff" font-family="Outfit,sans-serif">Masitanwali</text>
              <text x="228" y="155" font-size="8" fill="#5a7fa0" font-family="Outfit,sans-serif">Border crossing</text>
            </g>

            <g className="marker-group" onClick={() => showLocation('ganganagar')} data-tip="Sri Ganganagar — First irrigated city" data-loc="ganganagar">
              <circle cx="155" cy="225" r="15" fill="#f5c842" opacity="0" className="pulse-ring" style={{animationDelay: '0.8s'}}/>
              <circle cx="155" cy="225" r="9" fill="#071525" stroke="#f5c842" stroke-width="2"/>
              <text x="155" y="229" textAnchor="middle" font-size="7" fill="#f5c842" font-family="Outfit,sans-serif" font-weight="700">SG</text>
              <text x="105" y="221" textAnchor="end" font-size="10" fill="#d0e8ff" font-family="Outfit,sans-serif">Sri Ganganagar</text>
              <text x="105" y="233" textAnchor="end" font-size="8" fill="#5a7fa0" font-family="Outfit,sans-serif">Irrigation hub</text>
            </g>

            <g className="marker-group" onClick={() => showLocation('anupgarh')} data-tip="Anupgarh — Stage I Terminus" data-loc="anupgarh">
              <circle cx="278" cy="242" r="15" fill="#ff6b6b" opacity="0" className="pulse-ring" style={{animationDelay: '1.0s'}}/>
              <circle cx="278" cy="242" r="9" fill="#071525" stroke="#ff6b6b" stroke-width="2"/>
              <text x="278" y="246" textAnchor="middle" font-size="7" fill="#ff6b6b" font-family="Outfit,sans-serif" font-weight="700">AN</text>
              <text x="294" y="238" font-size="10" fill="#d0e8ff" font-family="Outfit,sans-serif">Anupgarh</text>
              <text x="294" y="250" font-size="8" fill="#5a7fa0" font-family="Outfit,sans-serif">Stage I end</text>
            </g>

            <g className="marker-group" onClick={() => showLocation('bikaner')} data-tip="Bikaner — Historic Fort City" data-loc="bikaner">
              <circle cx="470" cy="312" r="16" fill="#f5c842" opacity="0" className="pulse-ring" style={{animationDelay: '1.3s'}}/>
              <circle cx="470" cy="312" r="10" fill="#071525" stroke="#f5c842" stroke-width="2.5"/>
              <text x="470" y="316" textAnchor="middle" font-size="7" fill="#f5c842" font-family="Outfit,sans-serif" font-weight="700">BKN</text>
              <text x="470" y="298" textAnchor="middle" font-size="10" fill="#d0e8ff" font-family="Outfit,sans-serif">Bikaner</text>
              <text x="470" y="332" textAnchor="middle" font-size="8" fill="#5a7fa0" font-family="Outfit,sans-serif">Desert city</text>
            </g>

            <g className="marker-group" onClick={() => showLocation('kolayat')} data-tip="Kolayat — Sacred Lake & Temple" data-loc="kolayat">
              <circle cx="490" cy="395" r="14" fill="#b48bfa" opacity="0" className="pulse-ring" style={{animationDelay: '1.6s'}}/>
              <circle cx="490" cy="395" r="8" fill="#071525" stroke="#b48bfa" stroke-width="2"/>
              <text x="490" y="399" textAnchor="middle" font-size="8" fill="#b48bfa" font-family="Outfit,sans-serif" font-weight="700">KL</text>
              <text x="490" y="381" textAnchor="middle" font-size="10" fill="#d0e8ff" font-family="Outfit,sans-serif">Kolayat</text>
              <text x="490" y="412" textAnchor="middle" font-size="8" fill="#5a7fa0" font-family="Outfit,sans-serif">Sacred lake</text>
            </g>

            <g className="marker-group" onClick={() => showLocation('jodhpur')} data-tip="Jodhpur — IIT Jodhpur & City Water Supply" data-loc="jodhpur" id="jodhpurMarker">
              <circle cx="530" cy="420" r="30" fill="#ff9d2e" opacity="0" className="pulse-ring" style={{animationDelay: '0s'}}/>
              <circle cx="530" cy="420" r="30" fill="#ff9d2e" opacity="0" className="pulse-ring" style={{animationDelay: '0.7s'}}/>
              <circle cx="530" cy="420" r="30" fill="#ff9d2e" opacity="0" className="pulse-ring" style={{animationDelay: '1.4s'}}/>
              <circle cx="530" cy="420" r="18" fill="rgba(255,157,46,0.08)" stroke="rgba(255,157,46,0.4)" stroke-width="1.5"/>
              <circle cx="530" cy="420" r="11" fill="#1a0a00" stroke="#ff9d2e" stroke-width="2.5" filter="url(#glow-orange)"/>
              <text x="530" y="424" textAnchor="middle" font-size="8" fill="#ff9d2e" font-family="Outfit,sans-serif" font-weight="800">JDH</text>
              <text x="548" y="410" font-size="11" fill="#ff9d2e" font-family="Outfit,sans-serif" font-weight="700">Jodhpur</text>
              <text x="548" y="423" font-size="9" fill="#b87030" font-family="Outfit,sans-serif">⭐ IIT Jodhpur</text>
              <text x="548" y="435" font-size="8" fill="#7a5020" font-family="Outfit,sans-serif">City water supply</text>
            </g>

            <g className="marker-group" onClick={() => showLocation('gajner')} data-tip="Gajner Wildlife Sanctuary" data-loc="gajner">
              <circle cx="503" cy="438" r="13" fill="#4ade80" opacity="0" className="pulse-ring" style={{animationDelay: '1.9s'}}/>
              <circle cx="503" cy="438" r="8" fill="#071525" stroke="#4ade80" stroke-width="2"/>
              <text x="503" y="442" textAnchor="middle" font-size="7" fill="#4ade80" font-family="Outfit,sans-serif" font-weight="700">GJ</text>
              <text x="503" y="425" textAnchor="middle" font-size="10" fill="#d0e8ff" font-family="Outfit,sans-serif">Gajner</text>
              <text x="503" y="455" textAnchor="middle" font-size="8" fill="#5a7fa0" font-family="Outfit,sans-serif">Wildlife</text>
            </g>

            <g className="marker-group" onClick={() => showLocation('mohangarh')} data-tip="Mohangarh — Stage II Terminal (649 km)" data-loc="mohangarh">
              <circle cx="378" cy="500" r="15" fill="#ff6b6b" opacity="0" className="pulse-ring" style={{animationDelay: '2.2s'}}/>
              <circle cx="378" cy="500" r="9" fill="#071525" stroke="#ff6b6b" stroke-width="2"/>
              <text x="378" y="504" textAnchor="middle" font-size="7" fill="#ff6b6b" font-family="Outfit,sans-serif" font-weight="700">MG</text>
              <text x="394" y="495" font-size="10" fill="#d0e8ff" font-family="Outfit,sans-serif">Mohangarh</text>
              <text x="394" y="507" font-size="8" fill="#5a7fa0" font-family="Outfit,sans-serif">Terminal · 649 km</text>
            </g>

            <g transform="translate(642,52)">
              <circle r="20" fill="rgba(3,13,26,0.75)" stroke="rgba(56,165,255,0.2)" stroke-width="1"/>
              <text x="0" y="-24" textAnchor="middle" font-size="10" fill="#38a5ff" font-family="Syne,sans-serif" font-weight="700">N</text>
              <text x="0" y="28" textAnchor="middle" font-size="8" fill="#3a5a7a" font-family="Outfit,sans-serif">S</text>
              <text x="-26" y="4" textAnchor="middle" font-size="8" fill="#3a5a7a" font-family="Outfit,sans-serif">W</text>
              <text x="26" y="4" textAnchor="middle" font-size="8" fill="#3a5a7a" font-family="Outfit,sans-serif">E</text>
              <polygon points="0,-16 3,0 0,6 -3,0" fill="#38a5ff" opacity="0.9"/>
              <polygon points="0,16 3,0 0,-6 -3,0" fill="#3a5a7a" opacity="0.5"/>
            </g>

            <g transform="translate(50,568)">
              <line x1="0" y1="0" x2="110" y2="0" stroke="#4a6a8a" stroke-width="1.5"/>
              <line x1="0" y1="-5" x2="0" y2="5" stroke="#4a6a8a" stroke-width="1.5"/>
              <line x1="110" y1="-5" x2="110" y2="5" stroke="#4a6a8a" stroke-width="1.5"/>
              <line x1="55" y1="-3" x2="55" y2="3" stroke="#4a6a8a" stroke-width="1"/>
              <text x="55" y="-8" textAnchor="middle" font-size="9" fill="#4a6a8a" font-family="Outfit,sans-serif">≈ 150 km</text>
            </g>
          </svg>

          <div className="map-legend">
            <div className="leg-item"><div className="leg-line" style={{background: '#38a5ff'}}></div>Main canal</div>
            <div className="leg-item"><div className="leg-line" style={{background: '#4ade80'}}></div>Branch canals</div>
            <div className="leg-item"><div className="leg-line" style={{background: '#ff9d2e'}}></div>Jodhpur supply</div>
            <div className="leg-item"><div className="leg-line" style={{background: '#f5c842'}}></div>Distributaries</div>
            <div className="leg-item"><div className="leg-line" style={{background: '#ff6b6b', height: '0', borderTop: '1px dashed #ff6b6b'}}></div>Intl. border</div>
          </div>

          <div className="map-tooltip" id="mapTooltip"></div>
        </div>

        <div className="side-panel">
          <div className="panel-tabs">
            <button className="tab-btn active" onClick={() => switchTab('explore')}>🗺 Explore</button>
            <button className="tab-btn" onClick={() => switchTab('timeline')}>📅 Timeline</button>
            <button className="tab-btn" onClick={() => switchTab('stats')}>📊 Stats</button>
          </div>

          <div className="panel-view active" id="tab-explore">
            <div className="default-state" id="defaultState">
              <div className="default-pulse">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                  <path d="M3 10C6 6 10 6 12 10C14 14 18 14 21 10" stroke="#38a5ff" stroke-width="2" stroke-linecap="round"/>
                  <path d="M3 15C6 11 10 11 12 15C14 19 18 19 21 15" stroke="#00d4aa" stroke-width="1.5" stroke-linecap="round" opacity="0.6"/>
                </svg>
              </div>
              <h3>Click a marker to explore</h3>
              <p>Discover the 649 km journey of India's greatest canal — from Harike in Punjab to the heart of the Thar Desert.</p>
              <div className="quick-facts">
                <div className="qf-item"><div className="qf-val">649 km</div><div className="qf-label">Total length</div></div>
                <div className="qf-item"><div className="qf-val">1.7 M ha</div><div className="qf-label">Area irrigated</div></div>
                <div className="qf-item"><div className="qf-val">1958</div><div className="qf-label">Construction began</div></div>
                <div className="qf-item"><div className="qf-val">~10 M</div><div className="qf-label">Beneficiaries</div></div>
              </div>
              <p style={{fontSize: '11px', color: '#3a6a8a'}}>⭐ Click the orange Jodhpur marker for the IIT Jodhpur story</p>
            </div>

            {/* Location panels - abbreviated for brevity, but include all */}
            <div className="loc-panel" id="loc-harike" style={{display: 'none'}}>
              <div className="loc-hero" style={{background: 'linear-gradient(135deg,#030d1a,#061828)'}}>
                <svg viewBox="0 0 360 170">
                  <rect width="360" height="170" fill="#050f1e"/>
                  <ellipse cx="180" cy="100" rx="170" ry="40" fill="#0a2e52" opacity="0.9"/>
                  <path d="M10,95 Q90,80 180,90 Q270,100 350,85 L350,120 Q270,115 180,120 Q90,125 10,115Z" fill="#0d3a6e" opacity="0.8"/>
                  <ellipse cx="180" cy="100" rx="140" ry="20" fill="none" stroke="#38a5ff" stroke-width="1" opacity="0.3"/>
                  <ellipse cx="180" cy="100" rx="100" ry="14" fill="none" stroke="#38a5ff" stroke-width="0.8" opacity="0.2"/>
                  <rect x="80" y="60" width="200" height="35" rx="3" fill="#0a1e38"/>
                  <rect x="80" y="60" width="200" height="8" rx="2" fill="#1a3a60"/>
                  <rect x="95" y="68" width="18" height="27" rx="1" fill="#0d2848"/>
                  <rect x="123" y="68" width="18" height="27" rx="1" fill="#0d2848"/>
                  <rect x="151" y="68" width="18" height="27" rx="1" fill="#0d2848"/>
                  <rect x="179" y="68" width="18" height="27" rx="1" fill="#0d2848"/>
                  <rect x="207" y="68" width="18" height="27" rx="1" fill="#0d2848"/>
                  <rect x="235" y="68" width="18" height="27" rx="1" fill="#0d2848"/>
                  <path d="M90,95 Q95,105 100,110 Q105,115 110,110 L113,95" fill="#1a5090" opacity="0.6"/>
                  <path d="M200,95 Q205,108 210,112 Q215,115 220,110 L222,95" fill="#1a5090" opacity="0.5"/>
                  <text x="180" y="148" textAnchor="middle" font-size="13" fill="#7ec8ff" font-family="Syne,sans-serif" font-weight="700">Harike Headworks</text>
                  <text x="180" y="163" textAnchor="middle" font-size="9" fill="#4a7aaa" font-family="Outfit,sans-serif">Origin of the Indira Gandhi Canal · Punjab</text>
                </svg>
                <button className="loc-close" onClick={closePanel}>✕</button>
              </div>
              <div className="loc-body">
                <span className="loc-tag" style={{background: 'rgba(56,165,255,0.12)', color: '#38a5ff'}}>Origin Point</span>
                <div className="loc-name">Harike Headworks</div>
                <div className="loc-sub">Ferozepur district, Punjab · Beas–Sutlej confluence</div>
                <p className="loc-desc">The birthplace of the Indira Gandhi Canal — where the Beas and Sutlej rivers merge to form one of India's most audacious engineering projects. A massive barrage here lifts water and channels it on a 649 km journey south-west into the Thar Desert. Everything that powers Rajasthan's green revolution begins at this single point.</p>
                <div className="stats-grid">
                  <div className="stat-card"><div className="stat-val">1952</div><div className="stat-lbl">Barrage built</div></div>
                  <div className="stat-card"><div className="stat-val">649 km</div><div className="stat-lbl">Canal stretches south</div></div>
                  <div className="stat-card"><div className="stat-val">Beas + Sutlej</div><div className="stat-lbl">River sources</div></div>
                  <div className="stat-card"><div className="stat-val">18,500 cusecs</div><div className="stat-lbl">Design discharge</div></div>
                </div>
                <div className="links-section">
                  <h4>Learn More</h4>
                  <a className="link-btn" href="https://en.wikipedia.org/wiki/Indira_Gandhi_Canal" target="_blank"><span className="link-icon" style={{background: 'rgba(56,165,255,0.1)'}}>📖</span><span>Wikipedia — Indira Gandhi Canal</span><span className="link-arrow">↗</span></a>
                  <a className="link-btn" href="https://www.youtube.com/results?search_query=Harike+Headworks+Indira+Gandhi+Canal" target="_blank"><span className="link-icon" style={{background: 'rgba(255,80,80,0.1)'}}>▶</span><span>YouTube — Harike Headworks</span><span className="link-arrow">↗</span></a>
                  <a className="link-btn" href="https://maps.google.com/?q=Harike+Headworks+Punjab" target="_blank"><span className="link-icon" style={{background: 'rgba(74,222,128,0.1)'}}>📍</span><span>View on Google Maps</span><span className="link-arrow">↗</span></a>
                </div>
              </div>
            </div>

            {/* Include all other location panels similarly - abbreviated for brevity */}
            <div className="loc-panel" id="loc-masitanwali" style={{display: 'none'}}>
              <div className="loc-hero" style={{background: 'linear-gradient(135deg,#030d1a,#0a1e10)'}}>
                <svg viewBox="0 0 360 170">
                  <rect width="360" height="170" fill="#060e08"/>
                  <rect x="0" y="0" width="180" height="170" fill="#0a1e0a" opacity="0.7"/>
                  <rect x="180" y="0" width="180" height="170" fill="#1a1008" opacity="0.7"/>
                  <line x1="180" y1="0" x2="180" y2="170" stroke="#5a7fa0" stroke-width="1.5" stroke-dasharray="6,3" opacity="0.6"/>
                  <text x="95" y="20" textAnchor="middle" font-size="9" fill="#4ade80" font-family="Outfit,sans-serif" opacity="0.6">PUNJAB</text>
                  <text x="265" y="20" textAnchor="middle" font-size="9" fill="#f5c842" font-family="Outfit,sans-serif" opacity="0.6">RAJASTHAN</text>
                  <path d="M0,90 L180,90 L310,90" fill="none" stroke="#38a5ff" stroke-width="5" opacity="0.2"/>
                  <path d="M0,90 L310,90" fill="none" stroke="#38a5ff" stroke-width="2.5" stroke-dasharray="10,5" opacity="0.7"/>
                  <path d="M0,85 L310,85 L310,95 L0,95Z" fill="#0d3060" opacity="0.5"/>
                  <text x="180" y="148" textAnchor="middle" font-size="13" fill="#7ec8ff" font-family="Syne,sans-serif" font-weight="700">Masitanwali</text>
                  <text x="180" y="163" textAnchor="middle" font-size="9" fill="#4a7aaa" font-family="Outfit,sans-serif">Punjab–Rajasthan Border Crossing</text>
                </svg>
                <button className="loc-close" onClick={closePanel}>✕</button>
              </div>
              <div className="loc-body">
                <span className="loc-tag" style={{background: 'rgba(74,222,128,0.12)', color: '#4ade80'}}>State Border</span>
                <div className="loc-name">Masitanwali</div>
                <div className="loc-sub">Fazilka district, Punjab → Sriganganagar, Rajasthan</div>
                <p className="loc-desc">The invisible but symbolic gateway — where the canal crosses from fertile Punjab into Rajasthan's arid landscape. At this crossing, the character of the land transforms dramatically: lush green farmland gives way to semi-arid scrub that the canal will eventually turn into productive agricultural land. Engineering meets political geography here.</p>
                <div className="stats-grid">
                  <div className="stat-card"><div className="stat-val">~200 km</div><div className="stat-lbl">From Harike</div></div>
                  <div className="stat-card"><div className="stat-val">2 States</div><div className="stat-lbl">Canal crosses</div></div>
                  <div className="stat-card"><div className="stat-val">Feeder</div><div className="stat-lbl">Canal type here</div></div>
                  <div className="stat-card"><div className="stat-val">1958</div><div className="stat-lbl">Construction start</div></div>
                </div>
                <div className="links-section"><h4>Learn More</h4>
                  <a className="link-btn" href="https://en.wikipedia.org/wiki/Indira_Gandhi_Canal" target="_blank"><span className="link-icon" style={{background: 'rgba(56,165,255,0.1)'}}>📖</span><span>Wikipedia — Canal route</span><span className="link-arrow">↗</span></a>
                  <a className="link-btn" href="https://maps.google.com/?q=Masitanwali+Punjab" target="_blank"><span className="link-icon" style={{background: 'rgba(74,222,128,0.1)'}}>📍</span><span>Google Maps</span><span className="link-arrow">↗</span></a>
                </div>
              </div>
            </div>
            <div className="loc-panel" id="loc-ganganagar" style={{display: 'none'}}>
              <div className="loc-hero" style={{background: 'linear-gradient(135deg,#030d1a,#0a1a08)'}}>
                <svg viewBox="0 0 360 170">
                  <rect width="360" height="170" fill="#060e06"/>
                  <rect y="80" width="360" height="90" fill="#0a1e0a" opacity="0.9"/>
                  <rect x="20" y="90" width="70" height="50" fill="#0f2e0f" rx="2"/>
                  <rect x="100" y="85" width="70" height="55" fill="#122e10" rx="2"/>
                  <rect x="180" y="90" width="70" height="50" fill="#0f2e0f" rx="2"/>
                  <rect x="260" y="85" width="75" height="55" fill="#143010" rx="2"/>
                  <line x1="55" y1="90" x2="55" y2="140" stroke="#1a4a1a" stroke-width="0.5"/>
                  <line x1="30" y1="115" x2="88" y2="115" stroke="#1a4a1a" stroke-width="0.5"/>
                  <path d="M0,82 L360,82" fill="none" stroke="#38a5ff" stroke-width="3" opacity="0.6"/>
                  <path d="M0,78 L360,78" fill="none" stroke="#38a5ff" stroke-width="1.5" stroke-dasharray="8,4" opacity="0.9"/>
                  <text x="180" y="148" textAnchor="middle" font-size="13" fill="#aef5a0" font-family="Syne,sans-serif" font-weight="700">Sri Ganganagar</text>
                  <text x="180" y="163" textAnchor="middle" font-size="9" fill="#4a7a4a" font-family="Outfit,sans-serif">India's first canal-irrigated city in Rajasthan</text>
                </svg>
                <button className="loc-close" onClick={closePanel}>✕</button>
              </div>
              <div className="loc-body">
                <span className="loc-tag" style={{background: 'rgba(245,200,66,0.12)', color: '#f5c842'}}>Irrigation Hub</span>
                <div className="loc-name">Sri Ganganagar</div>
                <div className="loc-sub">Sri Ganganagar district · Rajasthan's food basket</div>
                <p className="loc-desc">The first city in Rajasthan to benefit from canal irrigation — and perhaps the most dramatic transformation. What was once semi-desert now produces wheat, cotton, mustard, and sugarcane. Sri Ganganagar became the proof-of-concept that turned India's greatest desert into an agricultural powerhouse. It is today one of Rajasthan's most prosperous cities.</p>
                <div className="stats-grid">
                  <div className="stat-card"><div className="stat-val">Wheat</div><div className="stat-lbl">Primary crop</div></div>
                  <div className="stat-card"><div className="stat-val">1.3 M+</div><div className="stat-lbl">District population</div></div>
                  <div className="stat-card"><div className="stat-val">1955</div><div className="stat-lbl">First water arrived</div></div>
                  <div className="stat-card"><div className="stat-val">#1</div><div className="stat-lbl">Rajasthan wheat yield</div></div>
                </div>
                <div className="links-section"><h4>Learn More</h4>
                  <a className="link-btn" href="https://en.wikipedia.org/wiki/Sri_Ganganagar" target="_blank"><span className="link-icon" style={{background: 'rgba(56,165,255,0.1)'}}>📖</span><span>Wikipedia — Sri Ganganagar</span><span className="link-arrow">↗</span></a>
                  <a className="link-btn" href="https://www.youtube.com/results?search_query=Sri+Ganganagar+Rajasthan+canal+irrigation" target="_blank"><span className="link-icon" style={{background: 'rgba(255,80,80,0.1)'}}>▶</span><span>YouTube — Farming revolution</span><span className="link-arrow">↗</span></a>
                  <a className="link-btn" href="https://maps.google.com/?q=Sri+Ganganagar+Rajasthan" target="_blank"><span className="link-icon" style={{background: 'rgba(74,222,128,0.1)'}}>📍</span><span>Google Maps</span><span className="link-arrow">↗</span></a>
                </div>
              </div>
            </div>

            <div className="loc-panel" id="loc-anupgarh" style={{display: 'none'}}>
              <div className="loc-hero" style={{background: 'linear-gradient(135deg,#150505,#200a0a)'}}>
                <svg viewBox="0 0 360 170">
                  <rect width="360" height="170" fill="#100505"/>
                  <rect y="90" width="360" height="80" fill="#1a0a05" opacity="0.9"/>
                  <line x1="0" y1="55" x2="360" y2="55" stroke="#ff6b6b" stroke-width="2" stroke-dasharray="8,4" opacity="0.5"/>
                  <text x="320" y="48" font-size="8" fill="#ff6b6b" font-family="Outfit,sans-serif" opacity="0.6">Pakistan →</text>
                  <path d="M0,90 L200,90" fill="none" stroke="#38a5ff" stroke-width="3" opacity="0.6"/>
                  <circle cx="200" cy="90" r="10" fill="#0d2848" stroke="#38a5ff" stroke-width="2"/>
                  <text x="200" y="94" textAnchor="middle" font-size="7" fill="#38a5ff" font-family="Outfit,sans-serif" font-weight="700">END</text>
                  <text x="180" y="148" textAnchor="middle" font-size="13" fill="#ff9090" font-family="Syne,sans-serif" font-weight="700">Anupgarh</text>
                  <text x="180" y="163" textAnchor="middle" font-size="9" fill="#8a4a4a" font-family="Outfit,sans-serif">Stage I Terminus · Near Pakistan border</text>
                </svg>
                <button className="loc-close" onClick={closePanel}>✕</button>
              </div>
              <div className="loc-body">
                <span className="loc-tag" style={{background: 'rgba(255,107,107,0.12)', color: '#ff6b6b'}}>Stage I End</span>
                <div className="loc-name">Anupgarh</div>
                <div className="loc-sub">Sri Ganganagar district · Near Pakistan border</div>
                <p className="loc-desc">The end of Stage I, completed in 1963 — marking the first phase of the great canal's journey. Anupgarh sits tantalizingly close to the Pakistan border. Stage I alone transformed hundreds of thousands of hectares of wasteland into productive farmland, validating the entire project and paving the way for the far more ambitious Stage II.</p>
                <div className="stats-grid">
                  <div className="stat-card"><div className="stat-val">189 km</div><div className="stat-lbl">Stage I length</div></div>
                  <div className="stat-card"><div className="stat-val">1963</div><div className="stat-lbl">Stage I completed</div></div>
                  <div className="stat-card"><div className="stat-val">~5 km</div><div className="stat-lbl">From Pakistan</div></div>
                  <div className="stat-card"><div className="stat-val">0.55 M ha</div><div className="stat-lbl">Stage I irrigation</div></div>
                </div>
                <div className="links-section"><h4>Learn More</h4>
                  <a className="link-btn" href="https://en.wikipedia.org/wiki/Anupgarh" target="_blank"><span className="link-icon" style={{background: 'rgba(56,165,255,0.1)'}}>📖</span><span>Wikipedia — Anupgarh</span><span className="link-arrow">↗</span></a>
                  <a className="link-btn" href="https://maps.google.com/?q=Anupgarh+Rajasthan" target="_blank"><span className="link-icon" style={{background: 'rgba(74,222,128,0.1)'}}>📍</span><span>Google Maps</span><span className="link-arrow">↗</span></a>
                </div>
              </div>
            </div>

            <div className="loc-panel" id="loc-bikaner" style={{display: 'none'}}>
              <div className="loc-hero" style={{background: 'linear-gradient(135deg,#100a00,#1a1000)'}}>
                <svg viewBox="0 0 360 170">
                  <rect width="360" height="170" fill="#0e0800"/>
                  <rect y="100" width="360" height="70" fill="#1a1008" opacity="0.9"/>
                  <rect x="80" y="30" width="200" height="80" fill="#1a1000" rx="2"/>
                  <rect x="80" y="22" width="200" height="12" fill="#221500" rx="1"/>
                  <rect x="155" y="28" width="20" height="15" fill="#221500" rx="1"/>
                  <rect x="185" y="33" width="15" height="10" fill="#1a1000" rx="1"/>
                  <path d="M0,110 L360,110" fill="none" stroke="#f5c842" stroke-width="2" stroke-dasharray="10,6" opacity="0.4"/>
                  <text x="180" y="148" textAnchor="middle" font-size="13" fill="#f5d890" font-family="Syne,sans-serif" font-weight="700">Bikaner</text>
                  <text x="180" y="163" textAnchor="middle" font-size="9" fill="#8a7030" font-family="Outfit,sans-serif">Historic desert fort city · Camel country</text>
                </svg>
                <button className="loc-close" onClick={closePanel}>✕</button>
              </div>
              <div className="loc-body">
                <span className="loc-tag" style={{background: 'rgba(245,200,66,0.12)', color: '#f5c842'}}>Historic City</span>
                <div className="loc-name">Bikaner</div>
                <div className="loc-sub">Bikaner district · Thar Desert fort city</div>
                <p className="loc-desc">The ancient camel trading city that the Indira Gandhi Canal transformed. Water from the canal brought agriculture and industry to a city that for centuries survived on the back of camel caravans. The famous Junagarh Fort now overlooks green farmland where once there was only sand. Bikaner is the cultural capital of the canal's impact zone.</p>
                <div className="stats-grid">
                  <div className="stat-card"><div className="stat-val">1488</div><div className="stat-lbl">City founded</div></div>
                  <div className="stat-card"><div className="stat-val">6.5 lakh+</div><div className="stat-lbl">City population</div></div>
                  <div className="stat-card"><div className="stat-val">Junagarh</div><div className="stat-lbl">Famous fort</div></div>
                  <div className="stat-card"><div className="stat-val">Camel milk</div><div className="stat-lbl">Unique economy</div></div>
                </div>
                <div className="links-section"><h4>Learn More</h4>
                  <a className="link-btn" href="https://en.wikipedia.org/wiki/Bikaner" target="_blank"><span className="link-icon" style={{background: 'rgba(56,165,255,0.1)'}}>📖</span><span>Wikipedia — Bikaner</span><span className="link-arrow">↗</span></a>
                  <a className="link-btn" href="https://www.youtube.com/results?search_query=Bikaner+Junagarh+fort+Rajasthan" target="_blank"><span className="link-icon" style={{background: 'rgba(255,80,80,0.1)'}}>▶</span><span>YouTube — Bikaner city tour</span><span className="link-arrow">↗</span></a>
                  <a className="link-btn" href="https://maps.google.com/?q=Bikaner+Rajasthan" target="_blank"><span className="link-icon" style={{background: 'rgba(74,222,128,0.1)'}}>📍</span><span>Google Maps</span><span className="link-arrow">↗</span></a>
                </div>
              </div>
            </div>

            <div className="loc-panel" id="loc-kolayat" style={{display: 'none'}}>
              <div className="loc-hero" style={{background: 'linear-gradient(135deg,#0a0520,#150830)'}}>
                <svg viewBox="0 0 360 170">
                  <rect width="360" height="170" fill="#080415"/>
                  <ellipse cx="180" cy="110" rx="140" ry="40" fill="#0a1840" opacity="0.9"/>
                  <ellipse cx="180" cy="110" rx="110" ry="30" fill="#0d2060" opacity="0.8"/>
                  <ellipse cx="180" cy="110" rx="80" ry="22" fill="#102880" opacity="0.5"/>
                  <polygon points="120,80 126,45 132,80" fill="#2a1a5a"/>
                  <polygon points="168,80 174,35 180,80" fill="#3a2070"/>
                  <polygon points="216,80 222,45 228,80" fill="#2a1a5a"/>
                  <circle cx="126" cy="80" r="3" fill="#f5c842" opacity="0.9"/>
                  <circle cx="174" cy="80" r="4" fill="#f5c842" opacity="1"/>
                  <circle cx="222" cy="80" r="3" fill="#f5c842" opacity="0.9"/>
                  <rect x="140" y="80" width="80" height="6" fill="#1a1040" rx="1"/>
                  <rect x="145" y="86" width="70" height="6" fill="#150e38" rx="1"/>
                  <text x="180" y="153" textAnchor="middle" font-size="13" fill="#c090ff" font-family="Syne,sans-serif" font-weight="700">Kolayat</text>
                  <text x="180" y="166" textAnchor="middle" font-size="9" fill="#7050a0" font-family="Outfit,sans-serif">Sacred lake · 5,000 years of pilgrimage</text>
                </svg>
                <button className="loc-close" onClick={closePanel}>✕</button>
              </div>
              <div className="loc-body">
                <span className="loc-tag" style={{background: 'rgba(180,139,250,0.12)', color: '#b48bfa'}}>Sacred Site</span>
                <div className="loc-name">Kolayat</div>
                <div className="loc-sub">Bikaner district · Ancient pilgrimage town</div>
                <p className="loc-desc">A divine oasis in the Thar Desert — a natural lake ringed by 52 ghats and ancient temples dedicated to sage Kapil Muni. The canal's recharged water table has helped preserve this 5,000-year-old sacred site. The Kartik Purnima fair draws over 100,000 pilgrims annually, making it one of Rajasthan's most important religious gatherings.</p>
                <div className="stats-grid">
                  <div className="stat-card"><div className="stat-val">5,000+</div><div className="stat-lbl">Years of history</div></div>
                  <div className="stat-card"><div className="stat-val">52</div><div className="stat-lbl">Sacred ghats</div></div>
                  <div className="stat-card"><div className="stat-val">1 lakh+</div><div className="stat-lbl">Annual pilgrims</div></div>
                  <div className="stat-card"><div className="stat-val">Kapil Muni</div><div className="stat-lbl">Patron sage</div></div>
                </div>
                <div className="links-section"><h4>Learn More</h4>
                  <a className="link-btn" href="https://en.wikipedia.org/wiki/Kolayat" target="_blank"><span className="link-icon" style={{background: 'rgba(56,165,255,0.1)'}}>📖</span><span>Wikipedia — Kolayat</span><span className="link-arrow">↗</span></a>
                  <a className="link-btn" href="https://www.youtube.com/results?search_query=Kolayat+lake+temple+Rajasthan" target="_blank"><span className="link-icon" style={{background: 'rgba(255,80,80,0.1)'}}>▶</span><span>YouTube — Kolayat pilgrimage</span><span className="link-arrow">↗</span></a>
                  <a className="link-btn" href="https://maps.google.com/?q=Kolayat+Bikaner+Rajasthan" target="_blank"><span className="link-icon" style={{background: 'rgba(74,222,128,0.1)'}}>📍</span><span>Google Maps</span><span className="link-arrow">↗</span></a>
                </div>
              </div>
            </div>

            <div className="loc-panel" id="loc-jodhpur" style={{display: 'none'}}>
              <div className="loc-hero" style={{background: 'linear-gradient(135deg,#120800,#1e1200)'}}>
                <svg viewBox="0 0 360 170">
                  <rect width="360" height="170" fill="#100800"/>
                  <rect y="0" width="360" height="90" fill="#130900"/>
                  <path d="M0,110 Q80,90 160,105 Q240,120 320,100 L360,105 L360,170 L0,170Z" fill="#1e1008" opacity="0.9"/>
                  <path d="M0,120 Q70,102 140,116 Q200,128 280,110 L360,120 L360,170 L0,170Z" fill="#281408" opacity="0.7"/>
                  <path d="M0,95 Q60,92 120,90 Q160,89 200,90" fill="none" stroke="#ff9d2e" stroke-width="4" opacity="0.25"/>
                  <path d="M0,95 Q60,92 120,90 Q160,89 200,90" fill="none" stroke="#ff9d2e" stroke-width="2.5" stroke-dasharray="10,5" opacity="0.8"/>
                  <rect x="170" y="30" width="120" height="60" fill="#1a0e05" rx="2"/>
                  <rect x="165" y="22" width="132" height="12" fill="#221205"/>
                  <rect x="30" y="50" width="110" height="55" fill="#151008" rx="3"/>
                  <rect x="40" y="40" width="90" height="14" fill="#1a1408" rx="2"/>
                  <rect x="40" y="55" width="12" height="10" fill="#0a1828" rx="1"/>
                  <rect x="58" y="55" width="12" height="10" fill="#0a1828" rx="1"/>
                  <rect x="76" y="55" width="12" height="10" fill="#0a1828" rx="1"/>
                  <rect x="94" y="55" width="12" height="10" fill="#0a1828" rx="1"/>
                  <rect x="112" y="55" width="12" height="10" fill="#0a1828" rx="1"/>
                  <rect x="40" y="72" width="12" height="10" fill="#0a1828" rx="1"/>
                  <rect x="58" y="72" width="12" height="10" fill="#0a1828" rx="1"/>
                  <rect x="76" y="72" width="12" height="10" fill="#0a1828" rx="1"/>
                  <rect x="94" y="72" width="12" height="10" fill="#0a1828" rx="1"/>
                  <rect x="112" y="72" width="12" height="10" fill="#0a1828" rx="1"/>
                  <path d="M200,90 L90,90 L90,105" fill="none" stroke="#ff9d2e" stroke-width="1.5" stroke-dasharray="5,3" opacity="0.6"/>
                  <text x="85" y="37" textAnchor="middle" font-size="8" fill="#ff9d2e" font-family="Outfit,sans-serif" font-weight="600">IIT Jodhpur</text>
                  <text x="180" y="148" textAnchor="middle" font-size="13" fill="#ffb060" font-family="Syne,sans-serif" font-weight="800">Jodhpur City</text>
                  <text x="180" y="163" textAnchor="middle" font-size="9" fill="#a86030" font-family="Outfit,sans-serif">Canal water powers IIT Jodhpur &amp; 1.5 M residents</text>
                </svg>
                <button className="loc-close" onClick={closePanel}>✕</button>
              </div>
              <div className="loc-body">
                <span className="loc-tag" style={{background: 'rgba(255,157,46,0.15)', color: '#ff9d2e'}}>⭐ Featured Story</span>
                <div className="loc-name">Jodhpur & IIT Jodhpur</div>
                <div className="loc-sub">Jodhpur district · 1.5 million people · India's Sun City</div>
                <p className="loc-desc">The Blue City of Rajasthan — once dependent on unreliable groundwater — now receives a lifeline from the Indira Gandhi Canal via the Rajasthan Canal Project. Canal water is treated and supplied to both the city and the IIT Jodhpur campus, enabling this world-class institution to operate in one of India's most arid regions.</p>

                <div className="iit-card">
                  <h4>IIT Jodhpur — Innovation in the Desert</h4>
                  <p>Established in 2008 under the IITs Act, IIT Jodhpur's permanent campus at Karwar is directly sustained by the canal water supply infrastructure. The institute focuses on desert technology, solar energy, and sustainable engineering — fitting for an institution powered by a desert water project. Without the IGC supply chain, a campus of this scale would be impossible in the Thar.</p>
                </div>

                <div className="water-flow-mini">
                  <h4>How Water Reaches Jodhpur</h4>
                  <div className="flow-steps">
                    <div className="flow-step">Harike Barrage</div>
                    <div className="flow-arrow">→</div>
                    <div className="flow-step">Main Canal</div>
                    <div className="flow-arrow">→</div>
                    <div className="flow-step">Stage II</div>
                    <div className="flow-arrow">→</div>
                    <div className="flow-step highlight">Jodhpur Branch</div>
                    <div className="flow-arrow">→</div>
                    <div className="flow-step highlight">Treatment Plant</div>
                    <div className="flow-arrow">→</div>
                    <div className="flow-step highlight">IIT Jodhpur</div>
                  </div>
                </div>

                <div className="stats-grid">
                  <div className="stat-card"><div className="stat-val">1.5 M</div><div className="stat-lbl">Jodhpur population served</div></div>
                  <div className="stat-card"><div className="stat-val">2008</div><div className="stat-lbl">IIT Jodhpur founded</div></div>
                  <div className="stat-card"><div className="stat-val">Karwar</div><div className="stat-lbl">IIT campus location</div></div>
                  <div className="stat-card"><div className="stat-val">Solar + Water</div><div className="stat-lbl">Campus sustainability</div></div>
                </div>

                <div className="links-section">
                  <h4>Explore Further</h4>
                  <a className="link-btn" href="https://iitj.ac.in" target="_blank"><span className="link-icon" style={{background: 'rgba(255,157,46,0.12)'}}>🎓</span><span>IIT Jodhpur Official Website</span><span className="link-arrow">↗</span></a>
                  <a className="link-btn" href="https://en.wikipedia.org/wiki/IIT_Jodhpur" target="_blank"><span className="link-icon" style={{background: 'rgba(56,165,255,0.1)'}}>📖</span><span>Wikipedia — IIT Jodhpur</span><span className="link-arrow">↗</span></a>
                  <a className="link-btn" href="https://www.youtube.com/results?search_query=IIT+Jodhpur+campus+Rajasthan" target="_blank"><span className="link-icon" style={{background: 'rgba(255,80,80,0.1)'}}>▶</span><span>YouTube — IIT Jodhpur campus tour</span><span className="link-arrow">↗</span></a>
                  <a className="link-btn" href="https://www.youtube.com/results?search_query=Jodhpur+Indira+Gandhi+Canal+water+supply" target="_blank"><span className="link-icon" style={{background: 'rgba(255,80,80,0.1)'}}>▶</span><span>YouTube — Canal water to Jodhpur</span><span className="link-arrow">↗</span></a>
                  <a className="link-btn" href="https://en.wikipedia.org/wiki/Indira_Gandhi_Canal" target="_blank"><span className="link-icon" style={{background: 'rgba(56,165,255,0.1)'}}>📖</span><span>Wikipedia — Indira Gandhi Canal</span><span className="link-arrow">↗</span></a>
                  <a className="link-btn" href="https://maps.google.com/?q=IIT+Jodhpur+Karwar+Rajasthan" target="_blank"><span className="link-icon" style={{background: 'rgba(74,222,128,0.1)'}}>📍</span><span>IIT Jodhpur on Google Maps</span><span className="link-arrow">↗</span></a>
                </div>
              </div>
            </div>

            <div className="loc-panel" id="loc-gajner" style={{display: 'none'}}>
              <div className="loc-hero" style={{background: 'linear-gradient(135deg,#020e04,#061a08)'}}>
                <svg viewBox="0 0 360 170">
                  <rect width="360" height="170" fill="#030e05"/>
                  <rect y="70" width="360" height="100" fill="#071408" opacity="0.9"/>
                  <polygon points="50,70 65,28 80,70" fill="#0f2a0f"/>
                  <polygon points="40,70 55,34 70,70" fill="#1a3a18"/>
                  <polygon points="110,70 125,20 140,70" fill="#0f2a0f"/>
                  <polygon points="170,70 185,24 200,70" fill="#1a3a18"/>
                  <polygon points="230,70 245,28 260,70" fill="#0f2a0f"/>
                  <polygon points="290,70 305,24 320,70" fill="#1a3a18"/>
                  <ellipse cx="180" cy="110" rx="120" ry="30" fill="#082030" opacity="0.9"/>
                  <ellipse cx="180" cy="110" rx="90" ry="22" fill="#0d3050" opacity="0.7"/>
                  <path d="M220,88 Q235,80 250,76 Q235,72 220,78Z" fill="#1a3a18" opacity="0.7"/>
                  <ellipse cx="80" cy="135" rx="20" ry="9" fill="#142010" opacity="0.8"/>
                  <ellipse cx="76" cy="128" rx="9" ry="7" fill="#142010" opacity="0.8"/>
                  <text x="180" y="150" textAnchor="middle" font-size="13" fill="#70d870" font-family="Syne,sans-serif" font-weight="700">Gajner Wildlife Sanctuary</text>
                  <text x="180" y="164" textAnchor="middle" font-size="9" fill="#3a6a3a" font-family="Outfit,sans-serif">Canal-created wetland oasis in the desert</text>
                </svg>
                <button className="loc-close" onClick={closePanel}>✕</button>
              </div>
              <div className="loc-body">
                <span className="loc-tag" style={{background: 'rgba(74,222,128,0.12)', color: '#4ade80'}}>Wildlife</span>
                <div className="loc-name">Gajner Wildlife Sanctuary</div>
                <div className="loc-sub">Bikaner district · Accidental paradise</div>
                <p className="loc-desc">Perhaps the most beautiful accident of the Indira Gandhi Canal — as water flowed through the Thar, it created new wetlands and forests. Gajner Sanctuary sprang to life, now home to nilgai, chinkara, blackbuck, and 150+ bird species. The historic Gajner Palace on the lake shore is now a heritage hotel, a testament to how water transforms everything.</p>
                <div className="stats-grid">
                  <div className="stat-card"><div className="stat-val">80 km²</div><div className="stat-lbl">Sanctuary area</div></div>
                  <div className="stat-card"><div className="stat-val">150+</div><div className="stat-lbl">Bird species</div></div>
                  <div className="stat-card"><div className="stat-val">Blackbuck</div><div className="stat-lbl">Flagship species</div></div>
                  <div className="stat-card"><div className="stat-val">1887</div><div className="stat-lbl">Palace built</div></div>
                </div>
                <div className="links-section"><h4>Learn More</h4>
                  <a className="link-btn" href="https://en.wikipedia.org/wiki/Gajner_Wildlife_Sanctuary" target="_blank"><span className="link-icon" style={{background: 'rgba(56,165,255,0.1)'}}>📖</span><span>Wikipedia — Gajner Sanctuary</span><span className="link-arrow">↗</span></a>
                  <a className="link-btn" href="https://www.youtube.com/results?search_query=Gajner+Wildlife+Sanctuary+Bikaner" target="_blank"><span className="link-icon" style={{background: 'rgba(255,80,80,0.1)'}}>▶</span><span>YouTube — Gajner wildlife</span><span className="link-arrow">↗</span></a>
                  <a className="link-btn" href="https://maps.google.com/?q=Gajner+Wildlife+Sanctuary" target="_blank"><span className="link-icon" style={{background: 'rgba(74,222,128,0.1)'}}>📍</span><span>Google Maps</span><span className="link-arrow">↗</span></a>
                </div>
              </div>
            </div>

            <div className="loc-panel" id="loc-mohangarh" style={{display: 'none'}}>
              <div className="loc-hero" style={{background: 'linear-gradient(135deg,#100508,#180a05)'}}>
                <svg viewBox="0 0 360 170">
                  <rect width="360" height="170" fill="#0e0406"/>
                  <rect y="0" width="360" height="95" fill="#100408"/>
                  <circle cx="40" cy="15" r="1" fill="white" opacity="0.7"/>
                  <circle cx="100" cy="8" r="1.5" fill="white" opacity="0.8"/>
                  <circle cx="180" cy="22" r="1" fill="white" opacity="0.6"/>
                  <circle cx="260" cy="10" r="1.5" fill="white" opacity="0.7"/>
                  <circle cx="310" cy="25" r="1" fill="white" opacity="0.5"/>
                  <circle cx="150" cy="5" r="1" fill="white" opacity="0.6"/>
                  <circle cx="220" cy="18" r="0.8" fill="white" opacity="0.5"/>
                  <path d="M0,100 Q90,72 180,90 Q270,108 360,78 L360,170 L0,170Z" fill="#1e1005" opacity="0.95"/>
                  <path d="M0,120 Q70,102 140,116 Q200,128 280,110 L360,120 L360,170 L0,170Z" fill="#281408" opacity="0.7"/>
                  <rect x="140" y="90" width="80" height="8" fill="#0a2040" rx="1"/>
                  <path d="M140,90 Q180,86 220,90 L220,98 Q180,94 140,98Z" fill="#1a4a80" opacity="0.8"/>
                  <rect x="168" y="72" width="24" height="20" rx="2" fill="#281408"/>
                  <rect x="172" y="62" width="16" height="12" rx="1" fill="#321808"/>
                  <text x="180" y="60" textAnchor="middle" font-size="7" fill="#8a5030" font-family="Outfit,sans-serif" font-weight="600">TERMINAL</text>
                  <text x="180" y="148" textAnchor="middle" font-size="13" fill="#ff7060" font-family="Syne,sans-serif" font-weight="700">Mohangarh</text>
                  <text x="180" y="163" textAnchor="middle" font-size="9" fill="#8a4030" font-family="Outfit,sans-serif">End of 649 km journey · Deep Thar Desert</text>
                </svg>
                <button className="loc-close" onClick={closePanel}>✕</button>
              </div>
              <div className="loc-body">
                <span className="loc-tag" style={{background: 'rgba(255,107,107,0.12)', color: '#ff6b6b'}}>Terminal Point</span>
                <div className="loc-name">Mohangarh</div>
                <div className="loc-sub">Jaisalmer district · End of Stage II · 649 km from origin</div>
                <p className="loc-desc">The final destination — 649 km from where it all began at Harike. Mohangarh sits in the heart of the Thar Desert, in Jaisalmer district. The arrival of canal water here completed Stage II, turning India's most desolate terrain into cultivable land. From this terminus, distributary channels fan out to irrigate thousands of hectares of former desert.</p>
                <div className="stats-grid">
                  <div className="stat-card"><div className="stat-val">649 km</div><div className="stat-lbl">Total canal length</div></div>
                  <div className="stat-card"><div className="stat-val">Stage II</div><div className="stat-lbl">Project phase</div></div>
                  <div className="stat-card"><div className="stat-val">1.7 M ha</div><div className="stat-lbl">Total area irrigated</div></div>
                  <div className="stat-card"><div className="stat-val">Jaisalmer</div><div className="stat-lbl">District</div></div>
                </div>
                <div className="links-section"><h4>Learn More</h4>
                  <a className="link-btn" href="https://en.wikipedia.org/wiki/Indira_Gandhi_Canal#Stage_II" target="_blank"><span className="link-icon" style={{background: 'rgba(56,165,255,0.1)'}}>📖</span><span>Wikipedia — Canal Stage II</span><span className="link-arrow">↗</span></a>
                  <a className="link-btn" href="https://www.youtube.com/results?search_query=Indira+Gandhi+Canal+Mohangarh+Stage+2" target="_blank"><span className="link-icon" style={{background: 'rgba(255,80,80,0.1)'}}>▶</span><span>YouTube — Deep desert canal</span><span className="link-arrow">↗</span></a>
                  <a className="link-btn" href="https://maps.google.com/?q=Mohangarh+Jaisalmer+Rajasthan" target="_blank"><span className="link-icon" style={{background: 'rgba(74,222,128,0.1)'}}>📍</span><span>Google Maps</span><span className="link-arrow">↗</span></a>
                </div>
              </div>
            </div>
          </div>

          <div className="panel-view" id="tab-timeline">
            <div className="timeline-panel">
              <h3>Canal Timeline</h3>

              <div className="timeline-item">
                <div className="tl-dot">1948</div>
                <div className="tl-content">
                  <div className="tl-year">1948</div>
                  <div className="tl-event">Proposal by Kanwar Sain</div>
                  <div className="tl-desc">Chief Engineer Kanwar Sain submits the first detailed proposal to bring Rajasthan Canal waters from the Sutlej–Beas rivers to the Thar Desert — a vision considered almost impossible at the time.</div>
                </div>
              </div>

              <div className="timeline-item">
                <div className="tl-dot">1952</div>
                <div className="tl-content">
                  <div className="tl-year">1952</div>
                  <div className="tl-event">Harike Barrage Completed</div>
                  <div className="tl-desc">The Harike Barrage at the Beas–Sutlej confluence in Punjab is completed, creating the water source for the entire project.</div>
                </div>
              </div>

              <div className="timeline-item">
                <div className="tl-dot">1958</div>
                <div className="tl-content">
                  <div className="tl-year">31 March 1958</div>
                  <div className="tl-event">Construction Begins</div>
                  <div className="tl-desc">PM Jawaharlal Nehru inaugurates construction of the Rajasthan Canal — one of the most ambitious irrigation projects in the world — calling it "the lifeline of Rajasthan."</div>
                </div>
              </div>

              <div className="timeline-item">
                <div className="tl-dot">1963</div>
                <div className="tl-content">
                  <div className="tl-year">1963</div>
                  <div className="tl-event">Stage I Completed</div>
                  <div className="tl-desc">The first 189 km (Stage I) reaches Anupgarh, bringing water to Sri Ganganagar and transforming hundreds of thousands of hectares. Proof the project works.</div>
                </div>
              </div>

              <div className="timeline-item">
                <div className="tl-dot">1984</div>
                <div className="tl-content">
                  <div className="tl-year">1984</div>
                  <div className="tl-event">Renamed Indira Gandhi Canal</div>
                  <div className="tl-desc">After PM Indira Gandhi's assassination, the Rajasthan Canal is renamed the Indira Gandhi Nahar Pariyojana in her honor — recognizing her strong support for Stage II expansion.</div>
                </div>
              </div>

              <div className="timeline-item">
                <div className="tl-dot" style={{borderColor: '#ff9d2e', color: '#ff9d2e'}}>2000s</div>
                <div className="tl-content">
                  <div className="tl-year">Early 2000s</div>
                  <div className="tl-event">Water reaches Jodhpur</div>
                  <div className="tl-desc">Canal water begins supplying Jodhpur city, a critical step for the Blue City's growing population and future infrastructure.</div>
                  <div className="tl-special">⭐ This enabled the eventual establishment of IIT Jodhpur's permanent campus at Karwar — water security was a prerequisite.</div>
                </div>
              </div>

              <div className="timeline-item">
                <div className="tl-dot" style={{borderColor: '#ff9d2e', color: '#ff9d2e'}}>2008</div>
                <div className="tl-content">
                  <div className="tl-year">2008</div>
                  <div className="tl-event">IIT Jodhpur Founded</div>
                  <div className="tl-desc">IIT Jodhpur is established as one of the new IITs, with its permanent campus at Karwar, Jodhpur — made possible by reliable canal-fed water supply to the desert city.</div>
                  <div className="tl-special">🎓 IIT Jodhpur's focus on desert tech, solar energy, and sustainability is made possible by the same canal infrastructure that transformed this region.</div>
                </div>
              </div>

              <div className="timeline-item">
                <div className="tl-dot">2010s</div>
                <div className="tl-content">
                  <div className="tl-year">Ongoing</div>
                  <div className="tl-event">Stage II Expansion Continues</div>
                  <div className="tl-desc">Stage II work continues toward the 460 km Mohangarh terminal. Distributary networks expand across Bikaner, Barmer, and Jaisalmer districts — the final frontier of the Thar Desert.</div>
                </div>
              </div>
            </div>
          </div>

          <div className="panel-view" id="tab-stats">
            <div className="stats-panel">
              <h3>Canal by the Numbers</h3>

              <div className="big-stat">
                <div className="big-stat-icon" style={{background: 'rgba(56,165,255,0.1)'}}>📏</div>
                <div><div className="big-stat-val">649 km</div><div className="big-stat-lbl">Total length — longest irrigation canal in India</div></div>
              </div>
              <div className="big-stat">
                <div className="big-stat-icon" style={{background: 'rgba(74,222,128,0.1)'}}>🌾</div>
                <div><div className="big-stat-val">1.7 M ha</div><div className="big-stat-lbl">Hectares of desert turned into farmland</div></div>
              </div>
              <div className="big-stat">
                <div className="big-stat-icon" style={{background: 'rgba(245,200,66,0.1)'}}>👥</div>
                <div><div className="big-stat-val">~10 M</div><div className="big-stat-lbl">People benefiting directly</div></div>
              </div>
              <div className="big-stat">
                <div className="big-stat-icon" style={{background: 'rgba(180,139,250,0.1)'}}>🏗️</div>
                <div><div className="big-stat-val">1958–present</div><div className="big-stat-lbl">Ongoing construction since independence</div></div>
              </div>
              <div className="big-stat">
                <div className="big-stat-icon" style={{background: 'rgba(56,165,255,0.1)'}}>💧</div>
                <div><div className="big-stat-val">18,500 cusecs</div><div className="big-stat-lbl">Design discharge capacity at Harike</div></div>
              </div>

              <div className="jodhpur-highlight-box">
                <h4>🏜️ Jodhpur & IIT Jodhpur</h4>
                <div className="mini-stat"><span>City population served</span><span>1.5 million+</span></div>
                <div className="mini-stat"><span>IIT founded</span><span>2008</span></div>
                <div className="mini-stat"><span>IIT campus location</span><span>Karwar, Jodhpur</span></div>
                <div className="mini-stat"><span>Key research areas</span><span>Desert tech, solar</span></div>
                <div className="mini-stat"><span>Water supply source</span><span>IGNP canal network</span></div>
                <div className="mini-stat"><span>Annual rainfall, Jodhpur</span><span>~350 mm (arid)</span></div>
              </div>

              <div className="big-stat">
                <div className="big-stat-icon" style={{background: 'rgba(255,157,46,0.1)'}}>🌡️</div>
                <div><div className="big-stat-val">350 mm/yr</div><div className="big-stat-lbl">Average Jodhpur rainfall — canal is essential</div></div>
              </div>
              <div className="big-stat">
                <div className="big-stat-icon" style={{background: 'rgba(74,222,128,0.1)'}}>🐾</div>
                <div><div className="big-stat-val">150+ species</div><div className="big-stat-lbl">Birds at Gajner — canal-created wetland</div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}