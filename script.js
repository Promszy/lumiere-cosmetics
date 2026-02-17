const products = [
    { name: "Celestial Serum", price: 68, img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=400" },
    { name: "Velvet Cleanser", price: 34, img: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=400" },
    { name: "Moonlight Oil", price: 52, img: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&q=80&w=400" }
];

const grid = document.getElementById('product-grid');

function renderProducts() {
    grid.innerHTML = products.map(p => `
        <div class="group cursor-pointer">
            <div class="aspect-[3/4] overflow-hidden bg-gray-100 mb-4 relative">
                <img src="${p.img}" class="w-full h-full object-cover group-hover:scale-105 transition duration-700">
                <button class="absolute bottom-0 left-0 w-full bg-charcoal text-white py-3 translate-y-full group-hover:translate-y-0 transition uppercase text-xs tracking-widest">Add to Bag</button>
            </div>
            <h3 class="font-medium uppercase text-sm tracking-tighter">${p.name}</h3>
            <p class="text-gray-400 font-light">$${p.price}.00</p>
        </div>
    `).join('');
}

renderProducts();
