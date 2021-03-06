<?php
/* Essas operações de transação fazem a mesma coisa que os métodos da 
classe MySQLi próprios para tais funcionalidades: */

// o mesmo que: $mysqli->begin_transaction(MYSQLI_TRANS_START_WITH_CONSISTENT_SNAPSHOT);
/* FLAGS:
MYSQLI_TRANS_START_READ_ONLY: Start the transaction as "START TRANSACTION READ ONLY". Requires MySQL 5.6 and above.
MYSQLI_TRANS_START_READ_WRITE: Start the transaction as "START TRANSACTION READ WRITE". Requires MySQL 5.6 and above.
MYSQLI_TRANS_START_WITH_CONSISTENT_SNAPSHOT: Start the transaction as "START TRANSACTION WITH CONSISTENT SNAPSHOT
(Veja mais em: https://www.itmnetworks.com.br/suporte/manuais/php/mysqli.begin-transaction.html").
*/
function startTransaction($mysqli)
{
    $mysqli->query("START TRANSACTION");
}

// o mesmo que: $mysqli->commit();
function commit($mysqli)
{
    $mysqli->query("COMMIT");
}

// o mesmo que: $mysqli->rollback();
function rollback($mysqli)
{
    $mysqli->query("ROLLBACK");
}