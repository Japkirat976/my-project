const categoryFilter = document.getElementById("categoryFilter");
const products = document.querySelectorAll(".product");

function productFilter() {
    const selectedCategory = categoryFilter.value;

    products.forEach(product => {
      const productCategory = product.getAttribute("data-category");

      if (selectedCategory === "all" || productCategory === selectedCategory) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    }) ;  
}

categoryFilter.addEventListener("change", productFilter);
