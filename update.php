 <?php



class crud{
	private $host="localhost";
	private $user="";
	private $db="";
	private $pass="";
	private $conn;
	
	
	public function __construct(){
		
		$this->conn = new PDO("mysql:host=".$this->host.";dbname=".$this->db,$this->user,$this->pass);
	}
	
	public function subscribers($email,$table){
		$sql = "INSERT INTO $table (email) VALUES (:email)";

		$q = $this->conn->prepare($sql);

		$q->execute(array(':email'=>$email));
		// $q->execute();
		// $d = $q->fetchColumn(); 

		return $q;

	}

}

?>