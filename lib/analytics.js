export const pageview = (url) => {
    if (window && window.gtag) {
        window.gtag('config', 'G-0D4QW9HQDE', {
            page_path: url,
        })
    }
}

export const event = ({ action, category, label, value }) => {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  };