describe('Test scenario 3', () => {
    let productList: any[];
    let randomProduct: any;
    let timeRange: any;
    let statistics: any[]; 
    // this test sometime fails due to 504
    // I suppose this is the server's issue, not from the test code
    it('Verify that statistics values are numbers', () => {
        cy.request('GET', 'https://api.v2.emissions-api.org/api/v2/products.json')
        .then((response) => {
          productList = response.body;
          // Select a random product
          randomProduct = productList[Math.floor(Math.random() * productList.length)];
          // Get the range of data available for the selected product
          cy.request('GET', `https://api.v2.emissions-api.org/api/v2/${randomProduct.name}/data-range.json`)
            .then((response) => {
            timeRange = response.body;
            // make dates to the format YYYY-MM-DD
            const startDate = (timeRange.first).substring(0, 10);
            const endDate = (timeRange.last).substring(0, 10);
            // Get all the available statistics for the product within the time range
            // Set the limit to 10 because even with limit 50 the request fails with 504 error
            cy.request({
                method: 'GET',
                url: `https://api.v2.emissions-api.org/api/v2/${randomProduct.name}/statistics.json?begin=${startDate}&end=${endDate}&limit=10&offset=0`,
                timeout: 100000
              })
                .then((response) => {
                    statistics = response.body;
                    // Check that all properties of the value object are numbers
                    statistics.forEach((statistic) => {
                        Object.values(statistic.value).forEach((value) => {
                            expect(value).to.be.a('number');
                        });
                    });
                });
            });
        });
    });
});
  