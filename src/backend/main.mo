actor {
  type BusinessInfo = {
    name : Text;
    phone : Text;
    location : Text;
    tagline : Text;
  };

  let businessInfo : BusinessInfo = {
    name = "Joe's Gas & Mechanic Repair";
    phone = "4711";
    location = "Nowhere City, IC";
    tagline = "For all your gas and repair needs";
  };

  public query func getBusinessInfo() : async BusinessInfo {
    businessInfo;
  };
};
