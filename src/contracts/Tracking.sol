pragma solidity >=0.4.21 <0.6.0;

contract Tracking {
    // uint _numberBankTransaction = 0;
    uint public _Transaction = 0;
    uint public _numberTransaction = 0;
    uint public _Vaccine = 0;
    address none = 0x0000000000000000000000000000000000000000;
    
    enum roles {
        Admin,
        Producer,
        Distributor,
        Docter,
        Patien
    }
    
    struct Vaccine {
        uint number;
        string name;
        string immune;
    }
    
    struct User {
        string name;
        roles role;
    }
    
    struct Transaction {
        uint256 time; 
        uint numberTransaction;
        uint numberVaccine;
        uint amountVaccine;
        address sender;
        address receiver;
        bool start;
        bool end;
    }

    address public admin;
    
    mapping(address => User) public users;
    
    mapping(uint256 => Transaction) public transactions;
    
    mapping(uint256 => Vaccine) public vaccines;
    
    constructor() public {
        admin = msg.sender;
        users[admin].name = 'Admin';
        users[admin].role = roles.Admin;
        vaccines[_Vaccine] = Vaccine(1,"MR","Campak");
        _Vaccine++;
        vaccines[_Vaccine] = Vaccine(2,"Varivax","Verisela");
        _Vaccine++;
        vaccines[_Vaccine] = Vaccine(3,"CoronaVac","Corona");
        _Vaccine++;
    }
    
    function addVaccine(uint _number, string memory _name, string memory _immune) public {
        require(msg.sender == admin,
            "Only admin can give access rights."
        );
        vaccines[_Vaccine] = Vaccine(_number,_name,_immune);
        _Vaccine++;
    }
    
    function addUser(address _user,string memory _userName, uint _userRole) public {
        require(msg.sender == admin,
            "Only admin can give access rights."
        );
        require(_userRole == 1 || _userRole == 2 || _userRole == 3 || _userRole == 4, 
            "Role not available."
        );
        users[_user].name = _userName;
        if (_userRole == 1) {
            users[_user].role = roles.Producer;
        } else if (_userRole == 2) {
            users[_user].role = roles.Distributor;
        } else if (_userRole == 3) {
            users[_user].role = roles.Docter;
        } else if (_userRole == 4) {
            users[_user].role = roles.Patien;
        }
    }

    function startTransaction(uint _numberVaccine, uint _amountVaccine) public {
        User storage sender = users[msg.sender];
        require(sender.role == roles.Producer , "Do not have the right to initiate a transaction");
        _Transaction ++;
        _numberTransaction ++;
        transactions[_Transaction] = Transaction(block.timestamp,_numberTransaction,_numberVaccine,_amountVaccine,msg.sender,none,true,false);
    }
    
    function goTransfer(uint _numberVaccine, uint _amountVaccine) public {
        User storage sender = users[msg.sender];
        require(sender.role == roles.Distributor || sender.role == roles.Docter, "Do not have the right to initiate a transaction");
        _Transaction ++;
        transactions[_Transaction] = Transaction(block.timestamp,_numberTransaction,_numberVaccine,_amountVaccine,msg.sender,msg.sender,true,false);
    }
    
    function finishTransaction(uint _numberVaccine, uint _amountVaccine) public {
        User storage sender = users[msg.sender];
        require(sender.role == roles.Patien , "Do not have the right to initiate a transaction");
        _Transaction ++;
        transactions[_Transaction] = Transaction(block.timestamp,_numberTransaction,_numberVaccine,_amountVaccine,none,msg.sender,true,true);
    }
    
}
