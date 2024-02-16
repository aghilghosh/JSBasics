// Module design pattern is a combination of IIFE and Closures
// IIFE creates a logical namespace and closure provide encapsulation and self contained modules.
// Advantages: 1) Self contained independant components 2) Encapsulation and Abstraction

var customerNamespace = (function(){
    var callCount = 0;
    function getCustomerDetails(){
        callCount++;
        validateCustomer();
        console.log("CustomerDetails() is called " + callCount);
    }
    function getCustomerPurchaseDetails(){
        callCount++;
        console.log("CustomerPurchaseDetails() is called " + callCount);
    }
    function validateCustomer(){}
    return{ getCustomerDetails, getCustomerPurchaseDetails}
})();

var supplierNamespace = (function(){
    var callCount = 0;
    function getSupplierDetails(){
        callCount++;
        validateSupplier();
        console.log("SupplierDetails() is called " + callCount);
    }
    function getSupplierSupplyDetails(){
        callCount++;
        console.log("getSupplierSupplyDetails() is called " + callCount);
    }
    function validateSupplier(){}
    return{ getSupplierDetails, getSupplierSupplyDetails}
})();

customerNamespace.getCustomerDetails();
customerNamespace.getCustomerPurchaseDetails();
customerNamespace.getCustomerPurchaseDetails();

supplierNamespace.getSupplierDetails();
supplierNamespace.getSupplierSupplyDetails();
supplierNamespace.getSupplierSupplyDetails();