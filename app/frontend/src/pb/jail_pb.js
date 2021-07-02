// source: pb/jail.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');

var goog = jspb;
var global = Function('return this')();

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

goog.object.extend(proto, google_protobuf_empty_pb);
goog.exportSymbol('proto.org.couchers.jail.AcceptTOSReq', null, global);
goog.exportSymbol('proto.org.couchers.jail.JailInfoRes', null, global);
goog.exportSymbol('proto.org.couchers.jail.SetLocationReq', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.org.couchers.jail.JailInfoRes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.org.couchers.jail.JailInfoRes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.org.couchers.jail.JailInfoRes.displayName = 'proto.org.couchers.jail.JailInfoRes';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.org.couchers.jail.AcceptTOSReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.org.couchers.jail.AcceptTOSReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.org.couchers.jail.AcceptTOSReq.displayName = 'proto.org.couchers.jail.AcceptTOSReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.org.couchers.jail.SetLocationReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.org.couchers.jail.SetLocationReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.org.couchers.jail.SetLocationReq.displayName = 'proto.org.couchers.jail.SetLocationReq';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.org.couchers.jail.JailInfoRes.prototype.toObject = function(opt_includeInstance) {
  return proto.org.couchers.jail.JailInfoRes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.org.couchers.jail.JailInfoRes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.org.couchers.jail.JailInfoRes.toObject = function(includeInstance, msg) {
  var f, obj = {
    jailed: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    hasNotAcceptedTos: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    hasNotAddedLocation: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.org.couchers.jail.JailInfoRes}
 */
proto.org.couchers.jail.JailInfoRes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.org.couchers.jail.JailInfoRes;
  return proto.org.couchers.jail.JailInfoRes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.org.couchers.jail.JailInfoRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.org.couchers.jail.JailInfoRes}
 */
proto.org.couchers.jail.JailInfoRes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setJailed(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasNotAcceptedTos(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasNotAddedLocation(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.org.couchers.jail.JailInfoRes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.org.couchers.jail.JailInfoRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.org.couchers.jail.JailInfoRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.org.couchers.jail.JailInfoRes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getJailed();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getHasNotAcceptedTos();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getHasNotAddedLocation();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional bool jailed = 1;
 * @return {boolean}
 */
proto.org.couchers.jail.JailInfoRes.prototype.getJailed = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.org.couchers.jail.JailInfoRes} returns this
 */
proto.org.couchers.jail.JailInfoRes.prototype.setJailed = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional bool has_not_accepted_tos = 2;
 * @return {boolean}
 */
proto.org.couchers.jail.JailInfoRes.prototype.getHasNotAcceptedTos = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.org.couchers.jail.JailInfoRes} returns this
 */
proto.org.couchers.jail.JailInfoRes.prototype.setHasNotAcceptedTos = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bool has_not_added_location = 3;
 * @return {boolean}
 */
proto.org.couchers.jail.JailInfoRes.prototype.getHasNotAddedLocation = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.org.couchers.jail.JailInfoRes} returns this
 */
proto.org.couchers.jail.JailInfoRes.prototype.setHasNotAddedLocation = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.org.couchers.jail.AcceptTOSReq.prototype.toObject = function(opt_includeInstance) {
  return proto.org.couchers.jail.AcceptTOSReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.org.couchers.jail.AcceptTOSReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.org.couchers.jail.AcceptTOSReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    accept: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.org.couchers.jail.AcceptTOSReq}
 */
proto.org.couchers.jail.AcceptTOSReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.org.couchers.jail.AcceptTOSReq;
  return proto.org.couchers.jail.AcceptTOSReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.org.couchers.jail.AcceptTOSReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.org.couchers.jail.AcceptTOSReq}
 */
proto.org.couchers.jail.AcceptTOSReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAccept(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.org.couchers.jail.AcceptTOSReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.org.couchers.jail.AcceptTOSReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.org.couchers.jail.AcceptTOSReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.org.couchers.jail.AcceptTOSReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccept();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool accept = 1;
 * @return {boolean}
 */
proto.org.couchers.jail.AcceptTOSReq.prototype.getAccept = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.org.couchers.jail.AcceptTOSReq} returns this
 */
proto.org.couchers.jail.AcceptTOSReq.prototype.setAccept = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.org.couchers.jail.SetLocationReq.prototype.toObject = function(opt_includeInstance) {
  return proto.org.couchers.jail.SetLocationReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.org.couchers.jail.SetLocationReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.org.couchers.jail.SetLocationReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    city: jspb.Message.getFieldWithDefault(msg, 1, ""),
    lat: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    lng: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    radius: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.org.couchers.jail.SetLocationReq}
 */
proto.org.couchers.jail.SetLocationReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.org.couchers.jail.SetLocationReq;
  return proto.org.couchers.jail.SetLocationReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.org.couchers.jail.SetLocationReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.org.couchers.jail.SetLocationReq}
 */
proto.org.couchers.jail.SetLocationReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCity(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLat(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLng(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setRadius(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.org.couchers.jail.SetLocationReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.org.couchers.jail.SetLocationReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.org.couchers.jail.SetLocationReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.org.couchers.jail.SetLocationReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCity();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLat();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getLng();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getRadius();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
};


/**
 * optional string city = 1;
 * @return {string}
 */
proto.org.couchers.jail.SetLocationReq.prototype.getCity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.org.couchers.jail.SetLocationReq} returns this
 */
proto.org.couchers.jail.SetLocationReq.prototype.setCity = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional double lat = 2;
 * @return {number}
 */
proto.org.couchers.jail.SetLocationReq.prototype.getLat = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.org.couchers.jail.SetLocationReq} returns this
 */
proto.org.couchers.jail.SetLocationReq.prototype.setLat = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional double lng = 3;
 * @return {number}
 */
proto.org.couchers.jail.SetLocationReq.prototype.getLng = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.org.couchers.jail.SetLocationReq} returns this
 */
proto.org.couchers.jail.SetLocationReq.prototype.setLng = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional double radius = 4;
 * @return {number}
 */
proto.org.couchers.jail.SetLocationReq.prototype.getRadius = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.org.couchers.jail.SetLocationReq} returns this
 */
proto.org.couchers.jail.SetLocationReq.prototype.setRadius = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


goog.object.extend(exports, proto.org.couchers.jail);
