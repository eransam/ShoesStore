class Config {
     public supportPhone = "031234567";
}

class DevelopmentConfig extends Config {
    public employeesUrl = "http://localhost:3001/api/employees/";
    public employeesImageUrl = "http://localhost:3001/api/employees/images/";
    public registerUrl = "http://localhost:3001/api/auth/register/";
    public loginUrl = "http://localhost:3001/api/auth/login/";
    public productsUrl = "http://localhost:3001/api/products/";
    public productsImageUrl = "http://localhost:3001/api/products/images/";
}

class ProductionConfig extends Config {
    public employeesUrl = "https://shoes-eran-new.herokuapp.com/api/employees/";
   public employeesImageUrl = "https://shoes-eran-new.herokuapp.com/api/employees/images/";
    public registerUrl = "https://shoes-eran-new.herokuapp.com/api/auth/register/";
    public loginUrl = "https://shoes-eran-new.herokuapp.com/api/auth/login/";
    public productsUrl = "https://northwind-by-assaf.herokuapp.com/api/products/";
    public productsImageUrl = "https://northwind-by-assaf.herokuapp.com/api/products/images/";
}

const config = process.env.NODE_ENV === "development" ? new DevelopmentConfig() : new ProductionConfig();

export default config;
