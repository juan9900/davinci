<?php
include('db.php');

//GET ALL THE CLIENTS TO EXPORT
$sql = 'SELECT * FROM clients';

if (!($stmt = $db->prepare($sql))) {
    echo "Prepare failed: (" . $db->errno . ") " . $db->error;
}

// $stmt->bind_param('ii',$start_from,$num_per_page);
// if (!$stmt->bind_param('i',$subscribedDavinci)) {
//     echo "Binding parameters failed: (" . $stmt->errno . ") " . $stmt->error;
// }
// $stmt->execute();
if (!$stmt->execute()) {
    echo "Execute failed: (" . $stmt->errno . ") " . $stmt->error;
}
$result = $stmt->get_result();
$allClients = $result->fetch_all(MYSQLI_ASSOC);
echo json_encode($allClients);
// echo (json_encode([
//     'clients' => $result]));