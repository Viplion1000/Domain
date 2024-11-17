document.addEventListener("DOMContentLoaded", () => {
    const domains = [
      { name: "burganteknoloji.com", price: 7500 },
      { name: "burganbankteknoloji.com", price: 7500 },
      { name: "burgantechnology.com", price: 7500 },
      { name: "burgantechnologies.com", price: 7500 },
      { name: "burgantechnology.com.tr", price: 7500 },
      { name: "burgantechnologies.com.tr", price: 7500 },
      { name: "burganteknoloji.com.tr", price: 7500 },
      { name: "burgantech.com.tr", price: 7500 },
      { name: "burgandijital.com.tr", price: 7500 },
      { name: "burgansolutions.com.tr", price: 7500 },
      { name: "burgandigital.com", price: 7500 },
      { name: "burgandigital.com.tr", price: 7500 },
    ];
  
    const domainList = document.getElementById("domain-list");
    const purchaseForm = document.getElementById("purchase-form");
    const selectedDomainInput = document.getElementById("selected-domain");
  
    // Alan adlarını listele
    domains.forEach((domain) => {
      const domainItem = document.createElement("div");
      domainItem.className = "domain-item";
      domainItem.innerHTML = `
        <span>${domain.name} - $${domain.price.toLocaleString()}</span>
        <button onclick="selectDomain('${domain.name}')">Seç</button>
      `;
      domainList.appendChild(domainItem);
    });
  
    // Alan adı seçimi fonksiyonu
    window.selectDomain = (domainName) => {
      selectedDomainInput.value = domainName;
      purchaseForm.style.display = "block";
      window.scrollTo({ top: purchaseForm.offsetTop, behavior: "smooth" });
    };
  
    // Form gönderimi
    purchaseForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Satın alma işlemi başarıyla tamamlandı!");
      purchaseForm.reset();
      purchaseForm.style.display = "none";
    });
  });