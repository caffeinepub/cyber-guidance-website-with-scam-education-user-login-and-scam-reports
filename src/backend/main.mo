import Map "mo:core/Map";
import Array "mo:core/Array";
import Nat "mo:core/Nat";
import Time "mo:core/Time";
import List "mo:core/List";
import Principal "mo:core/Principal";
import Text "mo:core/Text";
import Runtime "mo:core/Runtime";
import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";

actor {
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  public type ScamType = {
    #phishing;
    #investment;
    #identityTheft;
    #ransomware;
    #fakeTechSupport;
    #romance;
    #shopping;
    #other;
  };

  public type ScamReport = {
    id : Nat;
    authorId : Principal;
    scamType : ScamType;
    title : Text;
    description : Text;
    dateReported : Time.Time;
    lossAmount : ?Nat;
  };

  public type UserProfile = {
    name : Text;
  };

  let scamReports = Map.empty<Nat, ScamReport>();
  var nextReportId = 0;
  let userProfiles = Map.empty<Principal, UserProfile>();

  // User profile management functions
  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can access profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  // Scam report functions
  public shared ({ caller }) func createScamReport(scamType : ScamType, title : Text, desc : Text, lossAmount : ?Nat) : async Nat {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Must be logged in to report scam");
    };
    let reportId = nextReportId;
    let report = {
      id = reportId;
      authorId = caller;
      scamType;
      title;
      description = desc;
      dateReported = Time.now();
      lossAmount;
    };
    scamReports.add(reportId, report);
    nextReportId += 1;
    reportId;
  };

  public query ({ caller }) func getAllReports() : async [ScamReport] {
    // Open to all users including guests - no authorization check needed
    scamReports.values().toArray();
  };

  public query ({ caller }) func getReportsByType(scamType : ScamType) : async [ScamReport] {
    // Open to all users including guests - no authorization check needed
    scamReports.values().toArray().filter(
      func(report : ScamReport) : Bool { report.scamType == scamType }
    );
  };
};
