<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
<form action="{{ route('test') }}" method="POST" enctype="multipart/form-data">
  {{ csrf_field() }}
  <input type="file" name="photo">
  <button type="submit">submit</button>
</form>

</body>
</html>
