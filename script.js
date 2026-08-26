document.getElementById('year').textContent = new Date().getFullYear();

// Lightbox
const galleryGrid = document.querySelector('.gallery-grid');
const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('.lightbox-img');
const lightboxClose = lightbox.querySelector('.lightbox-close');

function openLightbox(img) {
  lightboxImg.src = img.src;
  lightboxImg.alt = img.alt;
  lightbox.hidden = false;
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.hidden = true;
  lightboxImg.src = '';
  document.body.style.overflow = '';
}

galleryGrid.addEventListener('click', (e) => {
  const img = e.target.closest('img');
  if (img) openLightbox(img);
});

lightboxClose.addEventListener('click', closeLightbox);

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !lightbox.hidden) closeLightbox();
});

// Category filter tabs
const filterTabs = document.querySelectorAll('.filter-tab');
const galleryItems = document.querySelectorAll('.gallery-item');
const filterEmpty = document.querySelector('.filter-empty');
const categoryBlurbs = document.querySelectorAll('.category-blurb');

filterTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    filterTabs.forEach((t) => t.classList.remove('active'));
    tab.classList.add('active');

    const filter = tab.dataset.filter;
    let visibleCount = 0;

    galleryItems.forEach((item) => {
      const category = item.dataset.category;
      const show = filter === 'all' || category === filter;
      item.style.display = show ? '' : 'none';
      if (show) visibleCount++;
    });

    categoryBlurbs.forEach((blurb) => {
      blurb.hidden = blurb.dataset.category !== filter;
    });

    if (filterEmpty) filterEmpty.hidden = visibleCount > 0;
  });
});

// Enquiry form -> Supabase
// Replace these two values with your project's URL and publishable (anon) key.
// See README for how to create the Supabase project and table.
const SUPABASE_URL = 'https://YOUR-PROJECT.supabase.co';
const SUPABASE_KEY = 'YOUR-PUBLISHABLE-KEY';

const enquiryForm = document.getElementById('enquiry-form');

if (enquiryForm) {
  const submitBtn = enquiryForm.querySelector('.enquiry-submit');
  const statusEl = enquiryForm.querySelector('.form-status');
  let supabaseClient = null;

  function getClient() {
    if (!supabaseClient && window.supabase && !SUPABASE_URL.includes('YOUR-PROJECT')) {
      supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
    }
    return supabaseClient;
  }

  function setStatus(message, type) {
    statusEl.textContent = message;
    statusEl.className = 'form-status' + (type ? ' ' + type : '');
  }

  enquiryForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Honeypot: if this hidden field got filled, silently pretend success.
    const honeypot = enquiryForm.querySelector('#eq-company').value.trim();
    if (honeypot) {
      enquiryForm.reset();
      setStatus('Thanks — I\'ll get back to you soon.', 'success');
      return;
    }

    const client = getClient();
    if (!client) {
      setStatus('Form isn\'t connected yet — please email me directly instead.', 'error');
      return;
    }

    const formData = new FormData(enquiryForm);
    const payload = {
      name: formData.get('name')?.toString().trim(),
      email: formData.get('email')?.toString().trim(),
      phone: formData.get('phone')?.toString().trim() || null,
      project_type: formData.get('project_type')?.toString() || null,
      event_date: formData.get('event_date')?.toString() || null,
      location: formData.get('location')?.toString().trim() || null,
      budget_range: formData.get('budget_range')?.toString() || null,
      message: formData.get('message')?.toString().trim(),
    };

    if (!payload.name || !payload.email || !payload.message) {
      setStatus('Please fill in your name, email, and a message.', 'error');
      return;
    }

    submitBtn.disabled = true;
    setStatus('Sending…', '');

    const { error } = await client.from('enquiries').insert([payload]);

    submitBtn.disabled = false;

    if (error) {
      console.error('Enquiry submit error:', error);
      setStatus('Something went wrong — please email me directly instead.', 'error');
    } else {
      enquiryForm.reset();
      setStatus('Thanks — I\'ll get back to you soon.', 'success');
    }
  });
}
