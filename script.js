// ========== ACTIVITY DATA ==========
// Each activity object holds id, icon, title, desc, color accent, and completed status

const ACTIVITIES = [
  { id: 1, icon: "🗂️", title: "Set Up Project Structure",       desc: "Create HTML, CSS, JS files with clean folder layout",    color: "#4d96ff", completed: false },
  { id: 2, icon: "🎨", title: "Design Activity List UI",         desc: "Style cards, badges, and layout with CSS",              color: "#c77dff", completed: false },
  { id: 3, icon: "⚙️",  title: "Load Activities from JS Array",  desc: "Dynamically render activity list from static data",     color: "#ffd93d", completed: false },
  { id: 4, icon: "🖱️", title: "Implement Click Event Handlers",  desc: "Attach event listeners to buttons / checkboxes",        color: "#ff9f43", completed: false },
  { id: 5, icon: "🔄", title: "Update Status: Pending→Completed",desc: "Toggle completed state and update DOM instantly",       color: "#ff6b6b", completed: false },
  { id: 6, icon: "📊", title: "Real-Time Progress Counter",      desc: "Count completed, update progress bar & message",        color: "#6bcb77", completed: false },
  { id: 7, icon: "🚀", title: "Push to GitHub with README",      desc: "Upload source with proper structure and documentation", color: "#4d96ff", completed: false },
];

// ========== TEMPLATE SECTION DATA ==========

const TEMPLATE = [
  {
    num: "01", color: "#4d96ff", title: "Objective",
    content: `The goal of this project is to implement <code>basic front-end interactivity</code> that allows users to update activity status and view real-time progress. Using vanilla JavaScript DOM manipulation and event handling, the static Level-1 UI is transformed into a fully dynamic, responsive activity tracker — all without any backend service or page reload.`
  },
  {
    num: "02", color: "#c77dff", title: "Problem Focus",
    content: `Level-1 delivered a static HTML/CSS layout. Level-2 bridges the gap by introducing <code>JavaScript interactivity</code>. The core challenge is understanding event handling (click events), state changes (pending → completed), and dynamic UI updates — ensuring the DOM reflects the current data state at all times without requiring a page refresh.`
  },
  {
    num: "03", color: "#ffd93d", title: "Application Overview",
    content: `This is an <code>Interactive Activity Tracker</code> designed for a Front-End Development Hackathon. Key features include: a dynamically rendered list of 7 activities from a JavaScript array, clickable cards to toggle status, a live animated progress bar, real-time completion counter (e.g., "4 out of 7 activities completed"), and an edge-case message when all activities are done.`
  },
  {
    num: "04", color: "#ff9f43", title: "Data Handling Approach",
    content: `Data is managed entirely <code>in-memory</code> using a JavaScript array of activity objects. Each object holds an <code>id</code>, <code>title</code>, <code>description</code>, <code>icon</code>, and a <code>completed</code> boolean. On user interaction, the array is mutated and the UI is re-rendered. No backend or external API is used. Optionally, <code>localStorage</code> can persist progress across page reloads.`
  },
  {
    num: "05", color: "#ff6b6b", title: "UI Components Design",
    content: `Three main component areas: (1) <code>Activity List</code> — card-based layout with icon, title, description, color-coded left border, and status badge; (2) <code>Action Control</code> — the full card is clickable (acts as a toggle button); (3) <code>Progress Display</code> — an animated progress bar paired with a counter label ("X / Y Completed") and a dynamic status message.`
  },
  {
    num: "06", color: "#6bcb77", title: "Interactivity Implementation",
    content: `Each activity card has a <code>click</code> event listener attached via <code>addEventListener</code>. On click, the matching object in the data array has its <code>completed</code> flag toggled. The <code>renderActivities()</code> function rebuilds the DOM from the updated array. CSS class <code>.completed</code> is applied/removed to visually reflect the state change. The entire cycle runs synchronously — no reload required.`
  },
  {
    num: "07", color: "#c77dff", title: "Application Logic",
    content: `After every toggle, <code>updateProgress()</code> is called. It filters the array for <code>completed === true</code>, counts the results, computes a percentage, and sets the <code>width</code> of the progress bar element. The counter text is updated via <code>textContent</code>. An edge-case handler checks if all activities are done and displays a celebratory message.`
  },
  {
    num: "08", color: "#4d96ff", title: "Technology Used",
    content: `<code>HTML5</code> — semantic structure and layout. <code>CSS3</code> — custom properties (variables), flexbox, transitions, animations, and gradient backgrounds. <code>Vanilla JavaScript (ES6+)</code> — DOM manipulation, event listeners, array methods (<code>filter</code>, <code>find</code>), template literals, and state management via JS objects.`
  },
  {
    num: "09", color: "#ffd93d", title: "Best Practices Followed",
    content: `Meaningful function names: <code>renderActivities()</code>, <code>toggleActivity()</code>, <code>updateProgress()</code>. No hardcoded DOM strings — all UI built from data. Inline comments explain each logic block. Edge cases handled: all-complete celebration message, 0% state on load. Separation of concerns: data, render, and event logic kept distinct.`
  },
  {
    num: "10", color: "#ff9f43", title: "Key Features Implemented",
    content: `✅ Dynamic rendering of activity list from JS array. ✅ Click-to-toggle Pending → Completed status. ✅ Animated progress bar updating in real time. ✅ Live counter ("X out of 7 activities completed"). ✅ Color-coded activity cards with unique left borders. ✅ Edge-case message when all tasks are done. ✅ Zero page reloads — pure DOM manipulation.`
  },
  {
    num: "11", color: "#6bcb77", title: "Expected Output / Deliverables",
    content: `A fully working front-end application with interactive activity tracking, ability to mark each activity as completed, a real-time animated progress display, and the full source code uploaded to GitHub. The repository includes a <code>/css</code>, <code>/js</code> folder structure, an <code>index.html</code> entry point, and a <code>README.md</code> describing installation, features, and usage.`
  },
  {
    num: "12", color: "#c77dff", title: "Learning Outcome",
    content: `Through this project, the following skills were developed: JavaScript <code>event handling</code> (addEventListener, click events), <code>DOM manipulation</code> (querySelector, textContent, classList, style), <code>state management</code> using plain JS objects and arrays, building fully <code>interactive UIs</code> without frameworks, and applying <code>CSS transitions</code> for smooth visual feedback.`
  },
  {
    num: "13", color: "#ff6b6b", title: "Conclusion",
    content: `This Level-2 submission successfully transforms the static Level-1 layout into a dynamic, interactive activity tracker. By implementing JavaScript event handling and real-time DOM updates, users experience seamless status changes and live progress tracking. The project demonstrates a solid understanding of core front-end interactivity principles — event-driven programming, state management, and dynamic UI rendering — all achieved without any backend or page reload.`
  },
];

// ========== RENDER ACTIVITIES ==========
// Builds the activity list HTML from the ACTIVITIES array

function renderActivities() {
  const list = document.getElementById('activity-list');
  list.innerHTML = ACTIVITIES.map(a => `
    <div class="activity-card ${a.completed ? 'completed' : ''}"
         style="--c-accent: ${a.color}"
         onclick="toggleActivity(${a.id})">
      <div class="activity-icon">${a.icon}</div>
      <div class="activity-info">
        <div class="activity-title">${a.title}</div>
        <div class="activity-desc">${a.desc}</div>
      </div>
      <span class="status-badge ${a.completed ? 'completed' : 'pending'}">
        ${a.completed ? '✓ Done' : 'Pending'}
      </span>
      <div class="check-btn">${a.completed ? '✓' : ''}</div>
    </div>
  `).join('');
}

// ========== TOGGLE ACTIVITY ==========
// Flips the completed status of the clicked activity, then re-renders

function toggleActivity(id) {
  const activity = ACTIVITIES.find(a => a.id === id);
  if (!activity) return;

  activity.completed = !activity.completed; // toggle state
  renderActivities();                        // rebuild DOM
  updateProgress();                          // refresh counter & bar
}

// ========== UPDATE PROGRESS ==========
// Counts completed items, updates bar width and status message

function updateProgress() {
  const total     = ACTIVITIES.length;
  const done      = ACTIVITIES.filter(a => a.completed).length;
  const percent   = Math.round((done / total) * 100);

  // Update counter text
  document.getElementById('done-count').textContent  = done;
  document.getElementById('total-count').textContent = total;

  // Animate progress bar
  document.getElementById('progress-bar').style.width = percent + '%';

  // Dynamic status message with edge-case handling
  const msg = document.getElementById('progress-msg');
  if (done === 0) {
    msg.textContent = 'Click any activity to mark it as completed.';
    msg.className   = 'progress-msg';
  } else if (done === total) {
    // Edge case: all activities done
    msg.textContent = '🎉 All activities completed! Amazing work!';
    msg.className   = 'progress-msg done';
  } else {
    msg.textContent = `${done} out of ${total} activities completed — keep going!`;
    msg.className   = 'progress-msg';
  }
}

// ========== RENDER TEMPLATE BLOCKS ==========
// Builds the collapsible submission template sections

function renderTemplate() {
  const container = document.getElementById('template-blocks');
  container.innerHTML = TEMPLATE.map((t, i) => `
    <div class="tblock" id="tblock-${i}">
      <div class="tblock-head" onclick="toggleBlock(${i})">
        <div class="tblock-num" style="background:${t.color}22; color:${t.color}">${t.num}</div>
        <div class="tblock-title">${t.title}</div>
        <span class="tblock-arrow">▼</span>
      </div>
      <div class="tblock-body">
        <p>${t.content}</p>
      </div>
    </div>
  `).join('');
}

// ========== TOGGLE TEMPLATE BLOCK ==========
// Opens/closes a collapsible section

function toggleBlock(i) {
  const el = document.getElementById('tblock-' + i);
  el.classList.toggle('open');
}

// ========== SET TODAY'S DATE ==========

function setDate() {
  const el = document.getElementById('today-date');
  if (el) {
    el.textContent = new Date().toLocaleDateString('en-IN', {
      day: '2-digit', month: 'long', year: 'numeric'
    });
  }
}

// ========== INITIALISE ==========

setDate();
renderActivities();
updateProgress();
renderTemplate();