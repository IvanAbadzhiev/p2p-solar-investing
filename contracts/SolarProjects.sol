pragma solidity ^0.4.18;

contract SolarProjects {
    address private owner;
    
    struct SolarProject {
        uint16 id;
        string name;
        uint256 initialCoins;
    }
    
    mapping(address => SolarProject) projects;
    mapping(uint256 => SolarProject) projectIds;
    
    function SolarProjects() public {
        owner = msg.sender;
    }
    
    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }
    
    function createNewProject(uint16 id, string name,uint256 initialCoins) public {
        projects[msg.sender] = SolarProject(id, name, initialCoins);
        projectIds[id] = SolarProject(id, name, initialCoins);
    }
    
    function getProjectById(uint16 id) public view returns(string, uint256) {
        return (projectIds[id].name, projectIds[id].initialCoins);
    }

    function destroy() public onlyOwner {
        selfdestruct(owner);
    }
}