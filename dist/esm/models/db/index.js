export var ListingStatus;
(function (ListingStatus) {
    ListingStatus[ListingStatus["Init"] = 1] = "Init";
    ListingStatus[ListingStatus["Pool"] = 2] = "Pool";
    ListingStatus[ListingStatus["Updating"] = 3] = "Updating";
    ListingStatus[ListingStatus["Sorting"] = 4] = "Sorting";
    ListingStatus[ListingStatus["Validation"] = 5] = "Validation";
    ListingStatus[ListingStatus["Validated"] = 6] = "Validated";
    ListingStatus[ListingStatus["Rejected"] = 7] = "Rejected";
    ListingStatus[ListingStatus["Killed"] = 8] = "Killed";
})(ListingStatus || (ListingStatus = {}));
export var ListingVote;
(function (ListingVote) {
    ListingVote[ListingVote["Accept"] = 0] = "Accept";
    ListingVote[ListingVote["Reject"] = 1] = "Reject";
    ListingVote[ListingVote["ModificationsNeeded"] = 2] = "ModificationsNeeded";
})(ListingVote || (ListingVote = {}));
//# sourceMappingURL=index.js.map