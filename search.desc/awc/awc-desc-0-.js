searchState.loadedDescShard("awc", 0, "<code>awc</code> is an asynchronous HTTP and WebSocket client library.\nAn asynchronous HTTP and WebSocket client.\nStandard HTTP request.\nStandard HTTP response.\nAn HTTP Client builder\nAn HTTP Client request builder\nClient Response\nCombined HTTP and WebSocket request type received by …\nCombined HTTP response &amp; WebSocket tunnel type returned …\nManages HTTP client network connectivity.\n<code>FrozenClientRequest</code> struct represents cloneable client …\nBuilder that allows to modify extra headers.\nA <code>Future</code> that reads a body stream, parses JSON, resolving …\nA <code>Future</code> that reads a body stream, resolving as <code>Bytes</code>.\nFuture that sends request’s payload and resolves to a …\nTunnel used by WebSocket connection requests.\nTunnel used for WebSocket communication.\nAdd default header.\nSet socket address of the server.\nAppend a header, keeping any that were set with an …\nSet client wide HTTP basic authorization header\nSet HTTP basic authorization header.\nSet client wide HTTP bearer authentication header\nSet HTTP bearer authentication header\nTraits and structures to aid consuming and writing HTTP …\nReturns a <code>Future</code> that consumes the body stream and …\nConstructs new <code>Client</code> builder.\nSend headers in <code>Camel-Case</code> form.\nSet keep-alive period for opened connection.\nSet max lifetime period for connection.\nUse custom connector service.\nSets custom connector.\nSet content length\nSet request’s content type\nSet a cookie\nReturn request cookie.\nLoad request cookies.\nConstruct HTTP <em>DELETE</em> request.\nDo not follow redirects.\nDisable request timeout.\nSet server connection disconnect timeout in milliseconds.\nHTTP client errors\nInsert a header, it overrides existing header in …\nClones this <code>FrozenClientRequest</code>, returning a new one with …\nClones this <code>FrozenClientRequest</code>, returning a new one with …\nFinish build process and create <code>Client</code> instance.\nFinish configuration process and create connector service.\nForce close connection instead of returning it back to …\nFreeze request builder and construct <code>FrozenClientRequest</code>, …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nConstruct HTTP <em>GET</em> request.\nGet HTTP method of this request\nGet HTTP method of this request\nGet peer address of this request.\nGet HTTP URI of request.\nGet HTTP URI of request\nGet HTTP version of this request.\nSets TLS handshake timeout.\nConstruct HTTP <em>HEAD</em> request.\nReturns request’s headers.\nGet default HeaderMap of Client.\nReturns request’s headers.\nReturns request’s headers.\nReturns request’s mutable headers.\nVarious HTTP related types.\nIndicates the initial window size (in octets) for HTTP2 …\nSets the initial window size (in bytes) for HTTP/2 …\nIndicates the initial window size (in octets) for HTTP2 …\nSets the initial window size (in bytes) for HTTP/2 …\nInsert a header, replacing any that were set with an …\nInsert a header only if it is not yet set.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nUnwraps type into HTTP response.\nUnwraps type into WebSocket tunnel response.\nReturns a <code>Future</code> consumes the body stream, parses JSON, …\nSet total number of simultaneous connections per type of …\nChange max size of payload. Default limit is 2 MiB.\nChange max size limit of payload.\nSet local IP Address the connector would use for …\nSet local IP Address the connector would use for …\nMap the current body type to another using a closure. …\nMaximum supported HTTP major version.\nSets maximum supported HTTP major version.\nSet max number of redirects.\nSet HTTP method of this request.\nCreate a new ClientBuilder with default settings\nCreate a new connector with default TLS settings\nConstructs new client instance with default settings.\nCreates a JSON body stream reader from a response by …\nCreates a body stream reader from a response by taking its …\nDisable automatic decompress of response’s body\nDo not add fundamental default request headers.\nSets custom OpenSSL <code>SslConnector</code> instance.\nConstruct HTTP <em>OPTIONS</em> request.\nConstruct HTTP <em>PATCH</em> request.\nConstruct HTTP <em>POST</em> request.\nConstruct HTTP <em>PUT</em> request.\nSets the query part of the request\nConstruct HTTP request.\nCreate <code>ClientRequest</code> from <code>RequestHead</code>\nSets custom Rustls v0.20 <code>ClientConfig</code> instance.\nSets custom Rustls v0.21 <code>ClientConfig</code> instance.\nSets custom Rustls v0.22 <code>ClientConfig</code> instance.\nSets custom Rustls v0.23 <code>ClientConfig</code> instance.\nComplete request construction and send an empty body.\nSet an empty body and generate <code>ClientRequest</code>.\nSend an empty body.\nComplete request construction and send a body.\nComplete request construction and send body.\nSend a body.\nComplete request construction and send an urlencoded body.\nSet a urlencoded body and generate <code>ClientRequest</code>\nSend an urlencoded body.\nComplete request construction and send a json body.\nSet a JSON body and generate <code>ClientRequest</code>\nSend a json body.\nComplete request construction and send a streaming body.\nSet an streaming body and generate <code>ClientRequest</code>.\nSend a streaming body.\nGet the status from the server.\nTest helpers for actix http client to use during testing.\nSet request timeout\nSets TCP connection timeout.\nSet request timeout. Overrides client wide timeout setting.\nSet a timeout duration for <code>ClientResponse</code>.\nSet HTTP URI of request.\nRead the Request Version.\nRegisters middleware, in the form of a middleware …\nWebsockets client\nInitialize a WebSocket connection. Returns a WebSocket …\nError type returned from <code>to_bytes_limited</code> when body …\nBody size hint.\nStreaming response wrapper.\nA boxed message body with boxed errors.\nAn “either” type specialized for body types.\nThe type of error that will be returned if streaming body …\nA body of type <code>L</code>.\nAn interface for types that can be used as a response body.\nBody type for responses that forbid payloads.\nImplicitly empty body.\nA body of type <code>R</code>.\nKnown size body.\nKnown sized streaming response wrapper.\nUnknown size body.\nEquivalent to <code>BodySize::Sized(0)</code>;\nReturns a mutable pinned reference to the inner message …\nWraps this body into a <code>BoxBody</code>.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns true if size hint indicates omitted or empty body.\nCreates new <code>EitherBody</code> using left variant.\nBoxes body type, erasing type information.\nCreates new <code>EitherBody</code> left variant with a boxed right …\nConstructs new “none” body.\nAttempt to pull out the next chunk of body bytes.\nAttempts to pull out the next value of the underlying …\nAttempts to pull out the next value of the underlying …\nCreates new <code>EitherBody</code> using right variant.\nBody size hint.\nCollects all the bytes produced by <code>body</code>.\nCollects the bytes produced by <code>body</code>, up to <code>limit</code> bytes.\nTry to convert into the complete chunk of body bytes.\nBad opcode.\nWebSocket key is not set or wrong.\nError sending request body\nFailed to connect to host\nA set of errors that can occur while connecting to an HTTP …\nContent type error\nUnknown continuation fragment.\nContinuation has not started.\nReceived new continuation but it is already started.\nOther errors that can occur after submitting a request.\nOther errors that can occur after submitting a request.\nDeserialize error\nConnector has been disconnected\nContent encoding stream corruption.\nA set of errors that can occur during freezing a request\nOnly get method is allowed.\nHttp2 error\nHttp2 error\nRepresents an HTTP header field value.\nHttp error\nHTTP error\nHTTP/2 payload error.\nA generic “error” for HTTP connections\nA payload reached EOF, but is not complete.\nInvalid challenge response\nInvalid connection header\nInvalid control frame length\nEncountered invalid opcode.\nInvalid response status\nInvalid upgrade header\nConnection io error\nGeneric I/O error.\nI/O error.\nA set of errors that can occur during parsing json payloads\nReceived a masked frame from server.\nMissing Connection header\nMissing Sec-Websocket-Accept header\nConnection header is not set to upgrade.\nNo dns records\nWebSocket version header is not set.\nUpgrade header if not set to WebSocket.\nPayload reached size limit.\nA payload reached size limit.\nPayload error\nA set of errors that can occur during payload parsing.\nProtocol error\nFailed to resolve the hostname\nError parsing response\nError sending request\nSend request error\nA set of errors that can occur during request sending and …\nSSL error\nSSL feature is not enabled\nAn HTTP status code (<code>status-code</code> in RFC 7230 et al.).\nConnecting took too long\nResponse took too long\nTunnels are not supported for HTTP/2 connection\nPayload length is unknown.\nReceived an unmasked frame from client.\nUnresolved host name\nUnsupported WebSocket version.\nInvalid URL\nInvalid URL\nWebsocket client error\nWebSocket handshake errors\nWebSocket protocol errors.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturn a reference to the lower level, inner error.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturn true if the underlying error has the same type as T.\n202 Accepted [RFC7231, Section 6.3.3]\n208 Already Reported [RFC5842]\n502 Bad Gateway [RFC7231, Section 6.6.3]\n400 Bad Request [RFC7231, Section 6.5.1]\n409 Conflict [RFC7231, Section 6.5.8]\nCONNECT\n100 Continue [RFC7231, Section 6.2.1]\n201 Created [RFC7231, Section 6.3.2]\nClose connection after response.\nRepresents various types of connection\nDELETE\n417 Expectation Failed [RFC7231, Section 6.5.14]\n424 Failed Dependency [RFC4918]\n403 Forbidden [RFC7231, Section 6.5.3]\n302 Found [RFC7231, Section 6.4.3]\n504 Gateway Timeout [RFC7231, Section 6.6.5]\nGET\n410 Gone [RFC7231, Section 6.5.9]\nHEAD\n<code>HTTP/0.9</code>\n<code>HTTP/1.0</code>\n<code>HTTP/1.1</code>\n<code>HTTP/2.0</code>\n<code>HTTP/3.0</code>\n505 HTTP Version Not Supported [RFC7231, Section 6.6.6]\n418 I’m a teapot [curiously not registered by IANA but …\n226 IM Used [RFC3229]\n507 Insufficient Storage [RFC4918]\n500 Internal Server Error [RFC7231, Section 6.6.1]\nKeep connection alive after response.\n411 Length Required [RFC7231, Section 6.5.10]\n423 Locked [RFC4918]\n508 Loop Detected [RFC5842]\n405 Method Not Allowed [RFC7231, Section 6.5.5]\n421 Misdirected Request RFC7540, Section 9.1.2\n301 Moved Permanently [RFC7231, Section 6.4.2]\n300 Multiple Choices [RFC7231, Section 6.4.1]\n207 Multi-Status [RFC4918]\nThe Request Method (VERB)\n511 Network Authentication Required [RFC6585]\n203 Non-Authoritative Information [RFC7231, Section 6.3.4]\n406 Not Acceptable [RFC7231, Section 6.5.6]\n510 Not Extended [RFC2774]\n404 Not Found [RFC7231, Section 6.5.4]\n501 Not Implemented [RFC7231, Section 6.6.2]\n304 Not Modified [RFC7232, Section 4.1]\n204 No Content [RFC7231, Section 6.3.5]\n200 OK [RFC7231, Section 6.3.1]\nOPTIONS\n206 Partial Content [RFC7233, Section 4.1]\nPATCH\n413 Payload Too Large [RFC7231, Section 6.5.11]\n402 Payment Required [RFC7231, Section 6.5.2]\n308 Permanent Redirect [RFC7238]\nPOST\n412 Precondition Failed [RFC7232, Section 4.2]\n428 Precondition Required [RFC6585]\n102 Processing [RFC2518]\n407 Proxy Authentication Required [RFC7235, Section 3.2]\nPUT\n416 Range Not Satisfiable [RFC7233, Section 4.4]\n431 Request Header Fields Too Large [RFC6585]\n408 Request Timeout [RFC7231, Section 6.5.7]\n205 Reset Content [RFC7231, Section 6.3.6]\n303 See Other [RFC7231, Section 6.4.4]\n503 Service Unavailable [RFC7231, Section 6.6.4]\n101 Switching Protocols [RFC7231, Section 6.2.2]\nAn HTTP status code (<code>status-code</code> in RFC 7230 et al.).\n307 Temporary Redirect [RFC7231, Section 6.4.7]\n429 Too Many Requests [RFC6585]\nTRACE\n401 Unauthorized [RFC7235, Section 3.1]\n451 Unavailable For Legal Reasons [RFC7725]\n422 Unprocessable Entity [RFC4918]\n415 Unsupported Media Type [RFC7231, Section 6.5.13]\n426 Upgrade Required [RFC7231, Section 6.5.15]\n414 URI Too Long [RFC7231, Section 6.5.12]\n305 Use Proxy [RFC7231, Section 6.4.5]\nConnection is upgraded to different type.\nThe URI component of a request.\n506 Variant Also Negotiates [RFC2295]\nRepresents a version of the HTTP spec.\nReturn a &amp;str representation of the HTTP method\nReturns a &amp;str representation of the <code>StatusCode</code>\nReturns the <code>u16</code> corresponding to this <code>StatusCode</code>.\nGet the authority of this <code>Uri</code>.\nCreates a new builder-style object to manufacture a <code>Uri</code>.\nGet the standardised <code>reason-phrase</code> for this status code.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nConverts a slice of bytes to an HTTP method.\nConverts a &amp;u8 to a status code\nAttempt to convert a <code>Bytes</code> buffer to a <code>Uri</code>.\nAttempt to convert a <code>Parts</code> into a <code>Uri</code>.\nConvert a <code>Uri</code> from a static string.\nConverts a u16 to a status code.\nPre-defined <code>HeaderName</code>s, traits for parsing and …\nGet the host of this <code>Uri</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConvert a <code>Uri</code> into <code>Parts</code>.\nCheck if status is within 400-499.\nWhether a method is considered “idempotent”, meaning …\nCheck if status is within 100-199.\nCheck if status is within 300-399.\nWhether a method is considered “safe”, meaning the …\nCheck if status is within 500-599.\nCheck if status is within 200-299.\nGet the path of this <code>Uri</code>.\nReturns the path &amp; query components of the Uri\nGet the port part of this <code>Uri</code>.\nGet the port of this <code>Uri</code> as a <code>u16</code>.\nGet the query string of this <code>Uri</code>, starting after the <code>?</code>.\nGet the scheme of this <code>Uri</code>.\nGet the scheme of this <code>Uri</code> as a <code>&amp;str</code>.\nURI component of request and response lines\nAdvertises which content types the client is able to …\nAdvertises which character set the client is able to …\nAdvertises which content encoding the client is able to …\nAdvertises which languages the client is able to …\nMarker used by the server to advertise partial request …\nPreflight response indicating if the response to the …\nPreflight response indicating permitted HTTP headers.\nPreflight header response indicating permitted access …\nIndicates whether the response can be shared with …\nIndicates which headers can be exposed as part of the …\nIndicates how long the results of a preflight request can …\nInforms the server which HTTP headers will be used when an …\nInforms the server know which HTTP method will be used …\nIndicates the time in seconds the object has been in a …\nLists the set of methods support by a resource.\nAdvertises the availability of alternate services to …\nContains the credentials to authenticate a user agent with …\nSealed trait implemented for types that can be effectively …\nBig5\nA format using the Brotli algorithm.\nSpecifies directives for caching mechanisms in both …\nResponse header field that indicates how caches have …\nResponse header field that allows origin servers to …\nControls whether or not the network connection stays open …\nIndicates if the content is expected to be displayed …\nUsed to compress the media-type.\nUsed to describe the languages intended for the audience.\nIndicates the size of the entity-body.\nIndicates an alternate location for the returned data.\nIndicates where in a full body message a partial message …\nAllows controlling resources the user agent is allowed to …\nAllows experimenting with policies by monitoring their …\nUsed to indicate the media type of the resource.\nContains stored HTTP cookies previously sent by the server …\nResponse header that prevents a document from loading any …\nResponse header that allows you to ensure a top-level …\nResponse header that conveys a desire that the browser …\nA MIME character set.\nRepresents a supported content encoding.\nContains the date and time at which the message was …\nIndicates the client’s tracking preference.\nA format using the zlib structure with deflate algorithm.\nIdentifier for a specific version of a resource.\nIndicates expectations that need to be fulfilled by the …\nContains the date/time after which the response is …\nThe type returned in the event of a conversion error.\nEUC-JP\nEUC-KR\nAn arbitrary charset specified as a string\nThe value part of an extended parameter consisting of …\nContains information from the client-facing side of proxy …\nContains an Internet email address for a human user who …\nGB2312\nGzip algorithm.\nSpecifies the domain name of the server and (optionally) …\nAn interface for types that already represent a valid …\nA multi-map of HTTP headers.\nRepresents an HTTP header field name\nRepresents an HTTP header field value.\nA timestamp with HTTP-style formatting and parsing.\nMakes a request conditional based on the E-Tag.\nMakes a request conditional based on the modification date.\nMakes a request conditional based on the E-Tag.\nMakes a request conditional based on range.\nMakes the request conditional based on the last …\nIndicates the no-op identity encoding.\nA possible error when converting a <code>HeaderName</code> from another …\nA possible error when converting a <code>HeaderValue</code> from a …\nISO-2022-JP\nISO-2022-JP-2\nISO-2022-KR\nISO-8859-1\nISO-8859-10\nISO-8859-2\nISO-8859-3\nISO-8859-4\nISO-8859-5\nISO-8859-6\nISO-8859-6-E\nISO-8859-6-I\nISO-8859-7\nISO-8859-8\nISO-8859-8-E\nISO-8859-8-I\nISO-8859-9\nKOI8-R\nContent-Types that are acceptable for the response.\nAllows the server to point an interested client to another …\nIndicates the URL to redirect a page to.\nA language tag as described in RFC 5646.\nThe maximum quality value, equivalent to <code>q=1.0</code>.\nIndicates the max number of intermediaries the request …\nThe minimum, non-zero quality value, equivalent to <code>q=0.001</code>.\nIndicates where a fetch originates from.\nResponse header that provides a mechanism to allow and …\nHTTP/1.0 header usually used for backwards compatibility.\nDefines the authentication method that should be used to …\nContains the credentials to authenticate a user agent to a …\nAssociates a specific cryptographic public key with a …\nSends reports of pinning violation to the report-uri …\nRepresents a quality used in q-factor values.\nRepresents an item with a quality value as defined in RFC …\nIndicates the part of a document that the server should …\nContains the address of the previous web page from which a …\nGoverns which referrer information should be included with …\nInforms the web browser that the current page or frame …\nThe Retry-After response HTTP header indicates how long …\nThe |Sec-WebSocket-Accept| header field is used in the …\nThe |Sec-WebSocket-Extensions| header field is used in the …\nThe |Sec-WebSocket-Key| header field is used in the …\nThe |Sec-WebSocket-Protocol| header field is used in the …\nThe |Sec-WebSocket-Version| header field is used in the …\nContains information about the software used by the origin …\nUsed to send cookies from the server to the user agent.\nTells the client to communicate with HTTPS instead of …\nShift_JIS\nInforms the server of transfer encodings willing to be …\nAllows the sender to include additional fields at the end …\nSpecifies the form of encoding used to safely transfer the …\nA possible error when converting a <code>HeaderValue</code> to a string …\nAn interface for types that can be converted into a …\nAn interface for types that can be converted into a …\nUsed as part of the exchange to upgrade the protocol.\nSends a signal to the server expressing the client’s …\nContains a string that allows identifying the requesting …\nUS ASCII\nDetermines how to match future requests with cached …\nAdded by proxies to track routing.\nGeneral HTTP header contains information about possible …\nDefines the authentication method that should be used to …\nMarker used by the server to indicate that the MIME types …\nControls DNS prefetching.\nRequest header (de-facto standard) for identifying the …\nRequest header (de-facto standard) for identifying the …\nRequest header (de-facto standard) for identifying the …\nIndicates whether or not a browser should be allowed to …\nStop pages from loading when an XSS attack is detected.\nThe zero quality value, equivalent to <code>q=0.0</code>.\nZstd algorithm.\nAppends a name-value pair to the map.\nConverts a <code>HeaderValue</code> to a byte slice.\nReturn the serialization of this language tag.\nReturns a <code>str</code> representation of the header.\nConvert content encoding to string.\nReturns the canonical version of the language tag following\nReturns the number of single-value headers the map can …\nThe character set that is used to encode the <code>value</code> to a …\nClears the map, removing all name-value pairs.\nReturns <code>true</code> if the map contains a value for the specified …\nClears the map, returning all name-value sets as an …\nPerforms a case-insensitive comparison of the string …\nPerforms a case-insensitive comparison of the string …\nReturn the extended language subtags.\nIterate on the extended language subtags.\nReturn the extension subtags.\nIterate on the extension subtags.\nFormat an array into a comma-delimited string.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nConverts a slice of bytes to an HTTP header name.\nAttempt to convert a byte slice to a <code>HeaderValue</code>.\nReads a comma-delimited raw header into a Vec.\nConverts a slice of bytes to an HTTP header name.\nAttempt to convert a <code>Bytes</code> buffer to a <code>HeaderValue</code>.\nConvert a <code>Bytes</code> directly into a <code>HeaderValue</code> without …\nConverts a HeaderName into a HeaderValue\nReads a single string when parsing a header.\nConverts a static string to a HTTP header name.\nConvert a static string to a <code>HeaderValue</code>.\nAttempt to convert a string to a <code>HeaderValue</code>.\nReturn the primary language subtag and its extended …\nReturns a reference to the <em>first</em> value associated with a …\nReturns an iterator over all values associated with a …\nReturns a mutable reference to the <em>first</em> value associated …\nPercent encode a sequence of bytes with a character set …\nInserts (overrides) a name-value pair in the map.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturn the serialization of this language tag.\nReturns true if the <code>HeaderValue</code> has a length of zero bytes.\nReturns true if the map contains no elements.\nChecks if it is a language range, meaning that there are …\nReturns <code>true</code> if the value represents sensitive data.\nCheck if the language tag is valid according to RFC 5646.\nThe wrapped contents of the field.\nAn iterator over all name-value pairs.\nAn iterator over all contained header names.\nThe human language details of the <code>value</code>, if available.\nReturns the length of <code>self</code>.\nReturns the number of values stored in the map.\nReturns the number of <em>keys</em> stored in the map.\nA multi-value <code>HeaderMap</code> and its iterators.\nMatches language tags. The first language acts as a …\nConstructs a new <code>QualityItem</code> from an item, using the …\nConstructs a new <code>QualityItem</code> from an item, using the …\nReturns the name of the header field.\nCreate an empty <code>HeaderMap</code>.\nConstructs a new <code>QualityItem</code> from an item and a quality …\nParse the header from a HTTP message.\nCreate a <code>LanguageTag</code> from its serialization.\nParses extended header parameter values (<code>ext-value</code>), as …\nReturn the primary language subtag.\nReturn the private use subtags.\nIterate on the private use subtags.\nConvenience function to create a <code>Quality</code> from an <code>f32</code> …\nThe quality (client or server preference) for the value.\nReturn the region subtag.\nRemoves all headers for a particular header name from the …\nReserves capacity for at least <code>additional</code> more headers to …\nRetains only the headers specified by the predicate.\nReturn the script subtag.\nMark that the header value represents sensitive …\nConvert content encoding to header value.\nYields a <code>&amp;str</code> slice if the <code>HeaderValue</code> only contains …\nTry to convert value to a HeaderValue.\nCheck if the language tag is “valid” according to RFC …\nThe parameter value, as expressed in octets.\nReturn the variant subtags.\nIterate on the variant subtags.\nCreate an empty <code>HeaderMap</code> with the specified capacity.\nConstructs a new <code>QualityItem</code> from an item, using zero …\nIterator over drained name-value pairs.\nA multi-map of HTTP headers.\nIterator over owned name-value pairs.\nIterator over borrowed name-value pairs.\nIterator over all names in the map.\nIterator over removed, owned values with the same …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns true if iterator contains no elements, without …\nRepresents the authority component of a URI.\nA builder for <code>Uri</code>s.\nHTTP protocol scheme\nHTTP protocol over TLS.\nAn error resulting from a failed attempt to construct a …\nAn error resulting from a failed attempt to construct a …\nThe various parts of a URI.\nRepresents the path component of a URI\nThe port component of a URI.\nRepresents the scheme component of a URI\nThe URI component of a request.\nReturns the port number as a <code>str</code>.\nReturn a str representation of the authority\nReturns the path and query as a string component.\nReturn a str representation of the scheme\nReturns the port number as a <code>u16</code>.\nSet the <code>Authority</code> for this URI.\nThe authority component of a URI\nConsumes this builder, and tries to construct a valid <code>Uri</code> …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nAttempt to convert a <code>Bytes</code> buffer to a <code>Authority</code>.\nAttempt to convert a <code>Bytes</code> buffer to a <code>PathAndQuery</code>.\nAttempt to convert an <code>Authority</code> from a static string.\nConvert a <code>PathAndQuery</code> from a static string.\nGet the host of this <code>Authority</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCreates a new default instance of <code>Builder</code> to construct a …\nReturns the path component\nSet the <code>PathAndQuery</code> for this URI.\nThe origin-form component of a URI\nGet the port part of this <code>Authority</code>.\nGet the port of this <code>Authority</code> as a <code>u16</code>.\nReturns the query string component\nSet the <code>Scheme</code> for this URI.\nThe scheme component of a URI\nTrait for transform a type to another one. Both the input …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCreates and returns a new Transform component.\nTest <code>ClientResponse</code> builder\nAppend a header\nSet cookie for this response\nComplete response creation and generate <code>ClientResponse</code> …\nReturns the argument unchanged.\nInsert a header\nCalls <code>U::from(self)</code>.\nSet response’s payload\nSet HTTP version of this response\nCreate TestResponse and set header\nIndicates an abnormal closure. If the abnormal closure was …\nIndicates that the server is overloaded and the client …\nIndicates that an endpoint is “going away”, such as a …\nBinary message.\nBinary frame.\nClose message with optional reason.\nClose message with optional reason.\nStatus code used to indicate why an endpoint is closing …\nReason for closing the connection\nWebSocket protocol codec.\nContinuation.\nContinuation.\nIndicates that a server is terminating the connection …\nIndicates that an endpoint (client) is terminating the …\nA WebSocket frame.\nIndicates that an endpoint is terminating the connection …\nA WebSocket message.\nNo-op. Useful for low-level services.\nIndicates a normal closure, meaning that the purpose for …\nPing message.\nPing message.\nIndicates that an endpoint is terminating the connection …\nPong message.\nPong message.\nIndicates that an endpoint is terminating the connection …\nIndicates that the server is restarting. A client may …\nIndicates that an endpoint is terminating the connection …\nText message.\nText frame. Note that the codec does not validate UTF-8 …\nIndicates that an endpoint is terminating the connection …\nWebSocket connection.\nSet socket address of the server.\nSet HTTP basic authorization header\nSet HTTP bearer authentication header\nSet decoder to client mode.\nExit code\nComplete request construction and connect to a WebSocket …\nSet a cookie\nOptional description of the exit code\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nAppend a header.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nSet max frame size\nSet max frame size.\nCreate new WebSocket frames decoder.\nSet request Origin\nSet supported WebSocket protocols\nDisable payload masking. By default ws client masks frame …\nInsert a header, replaces existing header.\nInsert a header only if it is not yet set.")