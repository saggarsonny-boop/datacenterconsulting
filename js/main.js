/* ===================================================
   WS Advisors — Main JavaScript
   =================================================== */

(function () {
  'use strict';

  /* ── Mobile nav toggle ─────────────────────────── */
  const toggle = document.getElementById('navToggle');
  const navList = document.getElementById('navList');
  if (toggle && navList) {
    toggle.addEventListener('click', function () {
      navList.classList.toggle('open');
      const expanded = navList.classList.contains('open');
      toggle.setAttribute('aria-expanded', String(expanded));
    });
    // Close on outside click
    document.addEventListener('click', function (e) {
      if (!toggle.contains(e.target) && !navList.contains(e.target)) {
        navList.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ── Checkbox items visual state ───────────────── */
  document.querySelectorAll('.checkbox-item input[type="checkbox"]').forEach(function (cb) {
    // Initial state
    if (cb.checked) cb.closest('.checkbox-item').classList.add('checked');
    cb.addEventListener('change', function () {
      cb.closest('.checkbox-item').classList.toggle('checked', cb.checked);
    });
  });

  /* ── Upload zone drag-and-drop ─────────────────── */
  document.querySelectorAll('.upload-zone').forEach(function (zone) {
    var input = zone.querySelector('input[type="file"]');
    var listEl = zone.parentElement.querySelector('.file-list');

    function renderFiles(files) {
      if (!listEl) return;
      listEl.innerHTML = '';
      Array.from(files).forEach(function (f) {
        var item = document.createElement('div');
        item.className = 'file-item';
        item.innerHTML = '<i class="fa-solid fa-file-lines"></i><span>' + escapeHtml(f.name) + '</span>';
        listEl.appendChild(item);
      });
    }

    if (input) {
      input.addEventListener('change', function () { renderFiles(input.files); });
    }

    zone.addEventListener('dragover', function (e) {
      e.preventDefault();
      zone.classList.add('drag-over');
    });
    zone.addEventListener('dragleave', function () { zone.classList.remove('drag-over'); });
    zone.addEventListener('drop', function (e) {
      e.preventDefault();
      zone.classList.remove('drag-over');
      if (input && e.dataTransfer.files.length) {
        // Use DataTransfer to update file input
        try {
          var dt = new DataTransfer();
          Array.from(e.dataTransfer.files).forEach(function (f) { dt.items.add(f); });
          input.files = dt.files;
          renderFiles(input.files);
        } catch (err) {
          // Fallback: just show names
          renderFiles(e.dataTransfer.files);
        }
      }
    });
  });

  /* ── Form validation & submission ──────────────── */
  var form = document.getElementById('propertyForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!validateForm()) return;
      // Simulate submission — in production, use fetch() to POST FormData
      var btn = form.querySelector('button[type="submit"]');
      var original = btn.innerHTML;
      btn.disabled = true;
      btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Submitting…';
      setTimeout(function () {
        window.location.href = 'success.html';
      }, 1200);
    });
  }

  function validateForm() {
    var required = form.querySelectorAll('[required]');
    var valid = true;
    required.forEach(function (field) {
      clearError(field);
      if (!field.value.trim()) {
        showError(field, 'This field is required.');
        valid = false;
      } else if (field.type === 'email' && !isValidEmail(field.value)) {
        showError(field, 'Please enter a valid email address.');
        valid = false;
      } else if (field.type === 'tel' && !isValidPhone(field.value)) {
        showError(field, 'Please enter a valid phone number.');
        valid = false;
      }
    });
    // At least one potential use must be selected
    var uses = form.querySelectorAll('input[name="potential_use"]');
    var anyChecked = Array.from(uses).some(function (cb) { return cb.checked; });
    var usesGroup = form.querySelector('.uses-group');
    if (uses.length && !anyChecked && usesGroup) {
      var err = usesGroup.querySelector('.field-error') || document.createElement('span');
      err.className = 'field-error';
      err.textContent = 'Please select at least one potential use.';
      usesGroup.appendChild(err);
      valid = false;
    }
    if (!valid) {
      var firstErr = form.querySelector('.field-error');
      if (firstErr) firstErr.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    return valid;
  }

  function showError(field, msg) {
    field.style.borderColor = '#d9381e';
    var err = document.createElement('span');
    err.className = 'field-error';
    err.style.cssText = 'display:block;color:#d9381e;font-size:0.8rem;margin-top:0.25rem;';
    err.textContent = msg;
    field.parentNode.appendChild(err);
  }

  function clearError(field) {
    field.style.borderColor = '';
    var err = field.parentNode.querySelector('.field-error');
    if (err) err.remove();
  }

  function isValidEmail(v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); }
  function isValidPhone(v) { return /^[\d\s\-\+\(\)]{7,}$/.test(v); }
  function escapeHtml(s) {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  /* ── Smooth-scroll for anchor links ────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
        if (navList) navList.classList.remove('open');
      }
    });
  });

  /* ── Scroll-reveal (lightweight) ───────────────── */
  if ('IntersectionObserver' in window) {
    var style = document.createElement('style');
    style.textContent = '.reveal{opacity:0;transform:translateY(24px);transition:opacity 0.55s ease,transform 0.55s ease}.reveal.visible{opacity:1;transform:none}';
    document.head.appendChild(style);

    var revealEls = document.querySelectorAll(
      '.challenge-card, .why-card, .step-card, .property-card, .opportunity-point, .market-stat'
    );
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealEls.forEach(function (el) {
      el.classList.add('reveal');
      observer.observe(el);
    });
  }

})();
