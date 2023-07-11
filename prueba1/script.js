window.addEventListener("DOMContentLoaded", () => {
    const countriesList = document.querySelector(".countries-list");
    const countryDetails = document.querySelector(".country-details");
    const clearButton = document.querySelector(".clear-button");

    // Función para obtener la información de los países desde la API
    const getCountriesData = async () => {
        try {
            const response = await fetch('https://countriesnow.space/api/v0.1/countries/population');
            const data = await response.json();

            // Iterar sobre los países y crear elementos HTML para mostrarlos en la página
            data.data.forEach(country => {
                const countryElement = document.createElement('div');
                countryElement.classList.add('country');
                countryElement.textContent = country.country;

                // Mostrar información detallada del país al hacer clic en él
                countryElement.addEventListener('click', () => {
                    showCountryDetails(country);
                });

                countriesList.appendChild(countryElement);
            });
        } 

        catch (error) {
            console.error('Error al obtener los datos de los países:', error);
        }
    };

    // Función para mostrar la información detallada del país seleccionado
    const showCountryDetails = (country) => {
        const lastPopulationCount = country.populationCounts[country.populationCounts.length - 1];
        countryDetails.innerHTML = `
            <h2>${country.country}</h2>
            <p>Población más reciente (${lastPopulationCount.year}): ${lastPopulationCount.value}</p>
            <p>Código ISO 3166-1 alfa-3: ${country.iso3}</p>

        `;
    };

    // Función para limpiar la información del país seleccionado
    const clearCountryDetails = () => {
        countryDetails.innerHTML = "";
    };

    // Cargar los datos de los países al cargar la página
    getCountriesData();

    // Evento para limpiar la información del país al hacer clic en el botón "Limpiar"
    clearButton.addEventListener("click", clearCountryDetails);

});
