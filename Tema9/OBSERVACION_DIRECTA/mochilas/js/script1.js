


document.getElementsByClassName("btn-info")[0].addEventListener("click", function () {

    let xhr = new XMLHttpRequest();

    xhr.open("GET", "mochilas.json", true);

    xhr.onload = function () {
        if (xhr.status === 200) {
            let productos = JSON.parse(xhr.responseText);
            let resultado = document.getElementById("resultado");
            resultado.innerHTML = "";
            productos.forEach(prod => {
                let resultado = document.getElementById("resultado");
                resultado.innerHTML = resultado.forEach(prod, `            
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="card h-100">
                        <img src="img/${prod.img}.jpg" class="card-img-top" alt="Timbuk2, un modelo elegante y espacioso"style="height: 180px; object-fit: contain;">
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title">${prod.nombre}</h5>
                            <p class="card-text small text-muted">
                                Uso: ${prod.wear} · Género: ${prod.gender}}
                            </p>
                            <p class="card-text">
                                ${prod.description}
                            </p>
                            <div class="mt-auto">
                                <p class="fw-bold mb-2">${prod.price}€</p>
                                <a href="#" class="btn btn-primary btn-sm w-100">
                                    Ver en ${prod.shop}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>`);
                resultado.appendChild(div);
            });
        } else {
            alert("Error al cargar productos");
        }
    };

    xhr.send();
});
