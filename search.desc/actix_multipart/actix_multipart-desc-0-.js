searchState.loadedDescShard("actix_multipart", 0, "Multipart form support for Actix Web.\nMultipart boundary is not found\nDuplicate field\nA single field in a multipart stream\nAn error from a field handler in a form\nMultipart stream is incomplete\nMissing field\nThe server-side implementation of <code>multipart/form-data</code> …\nA set of errors that can occur during parsing multipart …\nNested multipart is not supported\nContent-Disposition header is not found or is not equal to …\nContent-Type header is not found\nNot consumed\nError during field parsing\nCan not parse Content-Type header\nPayload error\nUnknown field\nReturns the field’s Content-Disposition.\nReturns a reference to the field’s content (mime) type, …\nProcess and extract typed data from a multipart stream.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns a reference to the field’s header map.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns the field’s name.\nCreate multipart instance for boundary.\nTrait that data types to be used in a multipart form …\nFuture that resolves to a <code>Self</code>.\nUsed to keep track of the remaining limits for the form …\nTrait that allows a type to be used in the <code>MultipartForm</code> …\nTyped <code>multipart/form-data</code> extractor.\nImplements <code>MultipartCollect</code> for a struct so that it can be …\n<code>MultipartForm</code> extractor configuration.\nReads a field into memory.\nSets custom error handler.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nOnce all the fields have been processed and stored in the …\nThe extractor will call this function for each incoming …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nUnwrap into inner <code>T</code> value.\nDeserializes a field as JSON.\nAn optional limit in bytes to be applied a given field …\nSets maximum accepted data that will be read into memory. …\nThe form will call this function to handle the field.\nWrites a field to a temporary file on disk.\nDeserializes a field from plain text.\nSets maximum accepted payload size for the entire form. By …\nThis function should be called within a <code>FieldReader</code> when …\nRead the field into memory.\nThe value of the <code>Content-Type</code> header.\nThe data.\nThe <code>filename</code> value in the <code>Content-Disposition</code> header.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nContent type error.\nDeserialize error.\nDeserialize from JSON.\nConfiguration for the <code>Json</code> field reader.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nSets whether or not the field must have a valid …\nFile I/O Error\nWrite the field to a temporary file on disk.\nConfiguration for the <code>TempFile</code> field reader.\nThe value of the <code>content-type</code> header.\nSets the directory that temp files will be created in.\nSets custom error handler.\nThe temporary file on disk.\nThe <code>filename</code> value in the <code>content-disposition</code> header.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nThe size in bytes of the file.\nContent type error.\nDeserialize error.\nDeserialize from plain text.\nConfiguration for the <code>Text</code> field reader.\nUTF-8 decoding error.\nSets custom error handler.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nUnwraps into inner value.\nSets whether or not the field must have a valid …\nConstructs a <code>multipart/form-data</code> payload from bytes and …\nConstructs a <code>multipart/form-data</code> payload from bytes and …")