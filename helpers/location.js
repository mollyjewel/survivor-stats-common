const HIERARCHY = ["city", "island", "state", "municipality", "province", "country"]

exports.getHierarchy = () => {
  return HIERARCHY
}

exports.getText = (locationMap) => {
  if (locationMap == null) {return ""}

  const locationText = HIERARCHY.map(x => locationMap[x]).filter(x => x).join(", ")

  return locationText
}
