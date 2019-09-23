// source: comment.proto
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

goog.exportSymbol('proto.commentModule.Comment', null, global);
goog.exportSymbol('proto.commentModule.RequestGetComments', null, global);
goog.exportSymbol('proto.commentModule.RequestPutComment', null, global);
goog.exportSymbol('proto.commentModule.ResponseGetComments', null, global);
goog.exportSymbol('proto.commentModule.ResponsePutComment', null, global);
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
proto.commentModule.RequestPutComment = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.commentModule.RequestPutComment, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.commentModule.RequestPutComment.displayName = 'proto.commentModule.RequestPutComment';
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
proto.commentModule.ResponsePutComment = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.commentModule.ResponsePutComment, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.commentModule.ResponsePutComment.displayName = 'proto.commentModule.ResponsePutComment';
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
proto.commentModule.Comment = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.commentModule.Comment, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.commentModule.Comment.displayName = 'proto.commentModule.Comment';
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
proto.commentModule.RequestGetComments = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.commentModule.RequestGetComments, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.commentModule.RequestGetComments.displayName = 'proto.commentModule.RequestGetComments';
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
proto.commentModule.ResponseGetComments = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.commentModule.ResponseGetComments.repeatedFields_, null);
};
goog.inherits(proto.commentModule.ResponseGetComments, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.commentModule.ResponseGetComments.displayName = 'proto.commentModule.ResponseGetComments';
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
proto.commentModule.RequestPutComment.prototype.toObject = function(opt_includeInstance) {
  return proto.commentModule.RequestPutComment.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.commentModule.RequestPutComment} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.commentModule.RequestPutComment.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, ""),
    targetId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    parentId: jspb.Message.getFieldWithDefault(msg, 3, 0),
    content: jspb.Message.getFieldWithDefault(msg, 4, ""),
    userId: jspb.Message.getFieldWithDefault(msg, 5, 0),
    clientId: jspb.Message.getFieldWithDefault(msg, 6, "")
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
 * @return {!proto.commentModule.RequestPutComment}
 */
proto.commentModule.RequestPutComment.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.commentModule.RequestPutComment;
  return proto.commentModule.RequestPutComment.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.commentModule.RequestPutComment} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.commentModule.RequestPutComment}
 */
proto.commentModule.RequestPutComment.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTargetId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setParentId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setUserId(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientId(value);
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
proto.commentModule.RequestPutComment.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.commentModule.RequestPutComment.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.commentModule.RequestPutComment} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.commentModule.RequestPutComment.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTargetId();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getParentId();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getUserId();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getClientId();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string type = 1;
 * @return {string}
 */
proto.commentModule.RequestPutComment.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.commentModule.RequestPutComment.prototype.setType = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 target_id = 2;
 * @return {number}
 */
proto.commentModule.RequestPutComment.prototype.getTargetId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.commentModule.RequestPutComment.prototype.setTargetId = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 parent_id = 3;
 * @return {number}
 */
proto.commentModule.RequestPutComment.prototype.getParentId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.commentModule.RequestPutComment.prototype.setParentId = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string content = 4;
 * @return {string}
 */
proto.commentModule.RequestPutComment.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.commentModule.RequestPutComment.prototype.setContent = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int32 user_id = 5;
 * @return {number}
 */
proto.commentModule.RequestPutComment.prototype.getUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.commentModule.RequestPutComment.prototype.setUserId = function(value) {
  jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string client_id = 6;
 * @return {string}
 */
proto.commentModule.RequestPutComment.prototype.getClientId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.commentModule.RequestPutComment.prototype.setClientId = function(value) {
  jspb.Message.setProto3StringField(this, 6, value);
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
proto.commentModule.ResponsePutComment.prototype.toObject = function(opt_includeInstance) {
  return proto.commentModule.ResponsePutComment.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.commentModule.ResponsePutComment} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.commentModule.ResponsePutComment.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    msg: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.commentModule.ResponsePutComment}
 */
proto.commentModule.ResponsePutComment.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.commentModule.ResponsePutComment;
  return proto.commentModule.ResponsePutComment.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.commentModule.ResponsePutComment} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.commentModule.ResponsePutComment}
 */
proto.commentModule.ResponsePutComment.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsg(value);
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
proto.commentModule.ResponsePutComment.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.commentModule.ResponsePutComment.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.commentModule.ResponsePutComment} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.commentModule.ResponsePutComment.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getMsg();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int32 code = 1;
 * @return {number}
 */
proto.commentModule.ResponsePutComment.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.commentModule.ResponsePutComment.prototype.setCode = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string msg = 2;
 * @return {string}
 */
proto.commentModule.ResponsePutComment.prototype.getMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.commentModule.ResponsePutComment.prototype.setMsg = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
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
proto.commentModule.Comment.prototype.toObject = function(opt_includeInstance) {
  return proto.commentModule.Comment.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.commentModule.Comment} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.commentModule.Comment.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    type: jspb.Message.getFieldWithDefault(msg, 2, ""),
    targetId: jspb.Message.getFieldWithDefault(msg, 3, 0),
    userId: jspb.Message.getFieldWithDefault(msg, 4, 0),
    parentId: jspb.Message.getFieldWithDefault(msg, 5, 0),
    content: jspb.Message.getFieldWithDefault(msg, 6, ""),
    createdAt: jspb.Message.getFieldWithDefault(msg, 7, 0)
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
 * @return {!proto.commentModule.Comment}
 */
proto.commentModule.Comment.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.commentModule.Comment;
  return proto.commentModule.Comment.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.commentModule.Comment} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.commentModule.Comment}
 */
proto.commentModule.Comment.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTargetId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setUserId(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setParentId(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCreatedAt(value);
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
proto.commentModule.Comment.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.commentModule.Comment.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.commentModule.Comment} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.commentModule.Comment.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTargetId();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getUserId();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getParentId();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getCreatedAt();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.commentModule.Comment.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.commentModule.Comment.prototype.setId = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string type = 2;
 * @return {string}
 */
proto.commentModule.Comment.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.commentModule.Comment.prototype.setType = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 target_id = 3;
 * @return {number}
 */
proto.commentModule.Comment.prototype.getTargetId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.commentModule.Comment.prototype.setTargetId = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 user_id = 4;
 * @return {number}
 */
proto.commentModule.Comment.prototype.getUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.commentModule.Comment.prototype.setUserId = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 parent_id = 5;
 * @return {number}
 */
proto.commentModule.Comment.prototype.getParentId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.commentModule.Comment.prototype.setParentId = function(value) {
  jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string content = 6;
 * @return {string}
 */
proto.commentModule.Comment.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.commentModule.Comment.prototype.setContent = function(value) {
  jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional int32 created_at = 7;
 * @return {number}
 */
proto.commentModule.Comment.prototype.getCreatedAt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.commentModule.Comment.prototype.setCreatedAt = function(value) {
  jspb.Message.setProto3IntField(this, 7, value);
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
proto.commentModule.RequestGetComments.prototype.toObject = function(opt_includeInstance) {
  return proto.commentModule.RequestGetComments.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.commentModule.RequestGetComments} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.commentModule.RequestGetComments.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, ""),
    targetId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    pageSize: jspb.Message.getFieldWithDefault(msg, 3, 0),
    currentPage: jspb.Message.getFieldWithDefault(msg, 4, 0),
    total: jspb.Message.getFieldWithDefault(msg, 5, 0)
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
 * @return {!proto.commentModule.RequestGetComments}
 */
proto.commentModule.RequestGetComments.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.commentModule.RequestGetComments;
  return proto.commentModule.RequestGetComments.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.commentModule.RequestGetComments} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.commentModule.RequestGetComments}
 */
proto.commentModule.RequestGetComments.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTargetId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCurrentPage(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotal(value);
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
proto.commentModule.RequestGetComments.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.commentModule.RequestGetComments.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.commentModule.RequestGetComments} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.commentModule.RequestGetComments.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTargetId();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getCurrentPage();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getTotal();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
};


/**
 * optional string type = 1;
 * @return {string}
 */
proto.commentModule.RequestGetComments.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.commentModule.RequestGetComments.prototype.setType = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 target_id = 2;
 * @return {number}
 */
proto.commentModule.RequestGetComments.prototype.getTargetId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.commentModule.RequestGetComments.prototype.setTargetId = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 page_size = 3;
 * @return {number}
 */
proto.commentModule.RequestGetComments.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.commentModule.RequestGetComments.prototype.setPageSize = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 current_page = 4;
 * @return {number}
 */
proto.commentModule.RequestGetComments.prototype.getCurrentPage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.commentModule.RequestGetComments.prototype.setCurrentPage = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 total = 5;
 * @return {number}
 */
proto.commentModule.RequestGetComments.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.commentModule.RequestGetComments.prototype.setTotal = function(value) {
  jspb.Message.setProto3IntField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.commentModule.ResponseGetComments.repeatedFields_ = [1];



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
proto.commentModule.ResponseGetComments.prototype.toObject = function(opt_includeInstance) {
  return proto.commentModule.ResponseGetComments.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.commentModule.ResponseGetComments} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.commentModule.ResponseGetComments.toObject = function(includeInstance, msg) {
  var f, obj = {
    commentsList: jspb.Message.toObjectList(msg.getCommentsList(),
    proto.commentModule.Comment.toObject, includeInstance),
    pageSize: jspb.Message.getFieldWithDefault(msg, 2, 0),
    currentPage: jspb.Message.getFieldWithDefault(msg, 3, 0),
    total: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.commentModule.ResponseGetComments}
 */
proto.commentModule.ResponseGetComments.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.commentModule.ResponseGetComments;
  return proto.commentModule.ResponseGetComments.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.commentModule.ResponseGetComments} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.commentModule.ResponseGetComments}
 */
proto.commentModule.ResponseGetComments.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.commentModule.Comment;
      reader.readMessage(value,proto.commentModule.Comment.deserializeBinaryFromReader);
      msg.addComments(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCurrentPage(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotal(value);
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
proto.commentModule.ResponseGetComments.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.commentModule.ResponseGetComments.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.commentModule.ResponseGetComments} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.commentModule.ResponseGetComments.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.commentModule.Comment.serializeBinaryToWriter
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getCurrentPage();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getTotal();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * repeated Comment comments = 1;
 * @return {!Array<!proto.commentModule.Comment>}
 */
proto.commentModule.ResponseGetComments.prototype.getCommentsList = function() {
  return /** @type{!Array<!proto.commentModule.Comment>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.commentModule.Comment, 1));
};


/** @param {!Array<!proto.commentModule.Comment>} value */
proto.commentModule.ResponseGetComments.prototype.setCommentsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.commentModule.Comment=} opt_value
 * @param {number=} opt_index
 * @return {!proto.commentModule.Comment}
 */
proto.commentModule.ResponseGetComments.prototype.addComments = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.commentModule.Comment, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.commentModule.ResponseGetComments.prototype.clearCommentsList = function() {
  this.setCommentsList([]);
};


/**
 * optional int32 page_size = 2;
 * @return {number}
 */
proto.commentModule.ResponseGetComments.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.commentModule.ResponseGetComments.prototype.setPageSize = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 current_page = 3;
 * @return {number}
 */
proto.commentModule.ResponseGetComments.prototype.getCurrentPage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.commentModule.ResponseGetComments.prototype.setCurrentPage = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 total = 4;
 * @return {number}
 */
proto.commentModule.ResponseGetComments.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.commentModule.ResponseGetComments.prototype.setTotal = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


goog.object.extend(exports, proto.commentModule);
