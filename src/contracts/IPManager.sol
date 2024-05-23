pragma solidity ^0.5.0;
pragma experimental ABIEncoderV2;

contract IPManager {
    //System Information
    string public title;
    uint public patentCount = 0;
    uint public applicationCount =0;
    uint public verifyCount = 0;
    uint public licenseCount = 0;
    uint public ownershipCount = 0;

    //Blockchain Databases
    mapping(uint => PatentContainer) public patents;//For patents
    mapping(uint => PatentContainer) public applications;//For applications
    mapping(uint => Verify) public verifies;//For Verfications
    mapping(uint => License) public licenses;//For License
    mapping(uint => Ownership) public ownerships; //For record privious ownwerships

    //Members of the system
    address public applicant;
    address public verifier;
    address public owner;

    address public seller;
    address public buyer;
    
    address public licensor;
    address public licensee;

    //Constructor of the contract
    constructor() public {
        title = "IP Manager";
    }

    //Data For Patent Applications
    struct Patent {
        uint grant_no;
        uint256 grant_date;
        uint application_no;
        string applicant;
        string inventor;
        string publication_number;
        string registerd_country;
        string description;
        uint256 application_date;
        uint256 publication_date;
        string publication_kind;
        string name;
    }

    struct PatentContainer {
        //This used becuse Struct can have only 16 local variables
        //So patent data isolate from variables need to run program
        uint id;
        uint version;
        address payable owner;
        uint price_assign;
        uint price_license;
        uint verifierPayment;
        Patent patent;
        uint max_license_count;
        uint licenseCount;
    }

    struct Verify {
        uint applicationId;
        address payable verifier;
    }

    struct License {
        address licensee;
        uint256 license_date;
        uint256 license_exp_date;
        address payable licensor;
        string terms_conditions;
        uint paid_amount;
        PatentContainer patentContainer;
    }

    struct Ownership {
        address assigner;
        address assignee;
        uint ownership_start_date;
        string terms_conditions;
        uint paid_amount;
        PatentContainer patentContainer;
    }

    //List of Events
    event PatentCreated(PatentContainer patentContainer);
    event ApplicationCreated(PatentContainer patentContainer);
    event VerifyCreated(PatentContainer patentContainer, Verify verify);
    event PatentPurchased(uint patentCount, PatentContainer patentContainer, address sender, bool status);
    event PatentLicensed(PatentContainer patentContainer, License license);

    //Appling for Patent
    function applyForPatent(PatentContainer memory new_patent_container) public payable {
        //Validate Inputs
        // Required
        /*require(bytes(new_patent_container.patent.name).length > 0);
        require(bytes(new_patent_container.patent.description).length > 0);
        require(bytes(new_patent_container.patent.publication_kind).length > 0);
        require(bytes(new_patent_container.patent.registerd_country).length > 0);
        require(bytes(new_patent_container.patent.publication_number).length > 0);
        require(bytes(new_patent_container.patent.inventor).length > 0);
        require(bytes(new_patent_container.patent.applicant).length > 0);*/

        //Create New application
        patentCount ++;
        new_patent_container.id = patentCount;
        patents[patentCount] = new_patent_container;

        //Set ownership data
        Ownership memory ownership = Ownership(new_patent_container.owner,new_patent_container.owner, 0, '', 0, new_patent_container);
        ownershipCount = ownershipCount+1;
        ownerships[ownershipCount] = ownership;

        // Trigger an event
        emit ApplicationCreated(new_patent_container);
    }

    //Verify Application
    /*function verifyPatent(PatentContainer memory patent_container, Verify memory verify) public payable {
        verify.verifier.transfer(patent_container.verifierPayment);

        emit VerifyCreated(patent_container, verify);
    }*/

    

    //event PatentPurchased();

    /*function createPatent(PatentContainer memory new_patent_container) public {
        // Required
        require(bytes(new_patent_container.patent.name).length > 0);
        require(bytes(new_patent_container.patent.description).length > 0);
        require(bytes(new_patent_container.patent.publication_kind).length > 0);
        require(bytes(new_patent_container.patent.registerd_country).length > 0);
        require(bytes(new_patent_container.patent.publication_number).length > 0);
        require(bytes(new_patent_container.patent.inventor).length > 0);
        require(bytes(new_patent_container.patent.applicant).length > 0);

        //require(bytes(_grant_no).length > 0);

        //Check Simileritis
        //Not Implemented

        //if similer found check owner is same then its a version
        //Not Implemented

        //if not not allowed to register
        // Increment patent count
        patentCount ++;

        // Create the patent
        new_patent_container.id = patentCount;
        patents[patentCount] = new_patent_container;

        // Trigger an event
        emit PatentCreated(new_patent_container);
    }*/

    //function 


    /*function findSimilerPatents(PatentContainer memory new_patent_container) private {
        
    }*/

    function purchasePatent(uint id) public payable {
        // Fetch the patent
        PatentContainer memory patent = patents[id];
        // Fetch the owner
        address payable seller = patent.owner;
        // Make sure the patent has a valid id
        /*require(patent.id > 0 && patent.id <= patentCount);
        // Require that there is enough Ether in the transaction
        //require(msg.value >= patent.price_assign);
        // Require that Patent is availabe to sell
        require(patent.price_assign > 0);
        // Require that the patent has not been purchased already
        //require(!patent.purchased);
        // Require that the buyer is not the seller
        require(seller != msg.sender);*/
        // Transfer ownership to the buyer
        patent.owner = msg.sender;

        // Mark as purchased
        //patent.purchased = true;
        
        // Update the patent
        patents[id] = patent;
        //Set ownership data
        Ownership memory ownership = Ownership(seller,msg.sender, 0, '', msg.value, patent);
        ownershipCount = ownershipCount+1;
        ownerships[ownershipCount] = ownership;
        // Pay the seller by sending them Ether
        address(seller).transfer(msg.value);
        // Trigger an event
        emit PatentPurchased(patentCount, patent, msg.sender, true);
    }


    function licensePatent(uint id, uint256 license_date, uint256 license_exp_date) public payable {
        // Fetch the patent
        PatentContainer memory patent = patents[id];
        // Fetch the owner
        address payable licenser = patent.owner;
        // Make sure the patent has a valid id
        /*require(patent.id > 0 && patent.id <= patentCount);
        // Require that there is enough Ether in the transaction
        require(msg.value >= patent.price_license);
        // Require that Patent is availabe to license
        require(patent.price_license > 0);
        // Require that the licenser is not the licensee
        require(licenser != msg.sender);
        //Require not excceding max licnesee count
        require(patent.max_license_count< patent.licenseCount);*/
        //Create License Record
        License memory license = License(msg.sender, license_date, license_exp_date, patent.owner, '', msg.value, patent);
        //Update licenses map count
        licenseCount = licenseCount + 1;
        //Add License Record to Map
        licenses[licenseCount] = license;
        // Update the patent
        patent.licenseCount = patent.licenseCount + 1;
        patents[id] = patent;
        // Pay the seller by sending them Ether
        address(licenser).transfer(msg.value);
        // Trigger an event
        emit PatentLicensed(patent, license);
    }
}

