<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "space_x";

$limit = 2 ;

$conn = mysqli_connect($servername, $username, $password, $dbname);

if (!$conn) {
  die("Connection failed: ".mysqli_connect_error());
}
if ($_SERVER['REQUEST_METHOD'] == 'GET' && $_GET['action'] == 'getCampaign') {
  $status = isset($_REQUEST['status']) ? $_REQUEST['status'] : '';
  $type = isset($_REQUEST['type']) ? $_REQUEST['type'] : '';
  $launch_date = isset($_REQUEST['launch_date']) ? $_REQUEST['launch_date'] : '';

  $page = isset($_REQUEST['page']) ? $_REQUEST['page'] : 1 ;
  $start = ($page -1 )*$limit ;

  $sql = "SELECT * FROM spacex_data ";  
    
  $isMultiple = false ;
  if($status != "" || $type != "" || $launch_date != ""){
      $sql .= " WHERE ";
      if ($status != "") {
        $sql .= " status LIKE '%$status%' ";
        $isMultiple = true ;
      }
      if($type != "") {
        if($isMultiple) {
          $sql .= " AND ";
        }
        $sql .= " type LIKE '%$type%' ";
        $isMultiple = true ;
      }
      if($launch_date != ""){
        if($isMultiple) {
          $sql .= " AND ";
        }
        $sql .= " DATE(original_launch) = '$launch_date' ";
        $isMultiple = true ;
      }
  }
  $result_total = mysqli_query($conn, $sql);
  $total_count = mysqli_num_rows($result_total);

  $sql .= "LIMIT $start , $limit ";
  $result = mysqli_query($conn, $sql);
  $data = [];
  while ($row = mysqli_fetch_assoc($result)) {
    $data[] = $row;
  }

  $response['campaign']['data'] = $data ;
  $response['campaign']['per_page'] = $limit ;
  $response['campaign']['total_count'] = $total_count ; 

  $sql_type = "SELECT DISTINCT (`type`) FROM `spacex_data`";
  $result1 = mysqli_query($conn, $sql_type);
  $type_array = [];
  while ($row = mysqli_fetch_assoc($result1)) {
    $type_array[] = $row;
  }

  $response['type_options'] = $type_array ;


  $sql_status = "SELECT DISTINCT (`status`) FROM `spacex_data`";
  $result2 = mysqli_query($conn, $sql_status);
  $status_array = [];
  while ($row = mysqli_fetch_assoc($result2)) {
    $status_array[] = $row;
  }

  $response['status_options'] = $status_array ;

  $sql_original_launch = "SELECT DISTINCT DATE(`original_launch`) as original_launch FROM `spacex_data`";
  $result3 = mysqli_query($conn, $sql_original_launch);
  $original_launch_array = [];
  while ($row = mysqli_fetch_assoc($result3)) {
    $original_launch_array[] = $row;
  }

  $response['original_launch_options'] = $original_launch_array ;

  echo json_encode($response);
  
} 
?>