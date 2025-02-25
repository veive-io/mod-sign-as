import { Writer, Reader } from "as-proto";

export namespace modsign {
  export class on_install_args {
    static encode(message: on_install_args, writer: Writer): void {
      const unique_name_data = message.data;
      if (unique_name_data !== null) {
        writer.uint32(10);
        writer.bytes(unique_name_data);
      }
    }

    static decode(reader: Reader, length: i32): on_install_args {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new on_install_args();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.data = reader.bytes();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    data: Uint8Array | null;

    constructor(data: Uint8Array | null = null) {
      this.data = data;
    }
  }

  export class on_uninstall_args {
    static encode(message: on_uninstall_args, writer: Writer): void {
      const unique_name_data = message.data;
      if (unique_name_data !== null) {
        writer.uint32(10);
        writer.bytes(unique_name_data);
      }
    }

    static decode(reader: Reader, length: i32): on_uninstall_args {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new on_uninstall_args();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.data = reader.bytes();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    data: Uint8Array | null;

    constructor(data: Uint8Array | null = null) {
      this.data = data;
    }
  }

  @unmanaged
  export class is_type_args {
    static encode(message: is_type_args, writer: Writer): void {
      if (message.type_id != 0) {
        writer.uint32(8);
        writer.uint32(message.type_id);
      }
    }

    static decode(reader: Reader, length: i32): is_type_args {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new is_type_args();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.type_id = reader.uint32();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    type_id: u32;

    constructor(type_id: u32 = 0) {
      this.type_id = type_id;
    }
  }

  @unmanaged
  export class is_type_result {
    static encode(message: is_type_result, writer: Writer): void {
      if (message.value != false) {
        writer.uint32(8);
        writer.bool(message.value);
      }
    }

    static decode(reader: Reader, length: i32): is_type_result {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new is_type_result();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.value = reader.bool();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    value: bool;

    constructor(value: bool = false) {
      this.value = value;
    }
  }

  export class manifest {
    static encode(message: manifest, writer: Writer): void {
      const unique_name_name = message.name;
      if (unique_name_name !== null) {
        writer.uint32(10);
        writer.string(unique_name_name);
      }

      if (message.type_id != 0) {
        writer.uint32(16);
        writer.uint32(message.type_id);
      }

      const unique_name_version = message.version;
      if (unique_name_version !== null) {
        writer.uint32(26);
        writer.string(unique_name_version);
      }

      const unique_name_description = message.description;
      if (unique_name_description !== null) {
        writer.uint32(34);
        writer.string(unique_name_description);
      }
    }

    static decode(reader: Reader, length: i32): manifest {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new manifest();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.name = reader.string();
            break;

          case 2:
            message.type_id = reader.uint32();
            break;

          case 3:
            message.version = reader.string();
            break;

          case 4:
            message.description = reader.string();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    name: string | null;
    type_id: u32;
    version: string | null;
    description: string | null;

    constructor(
      name: string | null = null,
      type_id: u32 = 0,
      version: string | null = null,
      description: string | null = null
    ) {
      this.name = name;
      this.type_id = type_id;
      this.version = version;
      this.description = description;
    }
  }

  export class is_valid_signature_args {
    static encode(message: is_valid_signature_args, writer: Writer): void {
      const unique_name_sender = message.sender;
      if (unique_name_sender !== null) {
        writer.uint32(10);
        writer.bytes(unique_name_sender);
      }

      const unique_name_signature = message.signature;
      if (unique_name_signature !== null) {
        writer.uint32(18);
        writer.bytes(unique_name_signature);
      }

      const unique_name_tx_id = message.tx_id;
      if (unique_name_tx_id !== null) {
        writer.uint32(26);
        writer.bytes(unique_name_tx_id);
      }
    }

    static decode(reader: Reader, length: i32): is_valid_signature_args {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new is_valid_signature_args();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.sender = reader.bytes();
            break;

          case 2:
            message.signature = reader.bytes();
            break;

          case 3:
            message.tx_id = reader.bytes();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    sender: Uint8Array | null;
    signature: Uint8Array | null;
    tx_id: Uint8Array | null;

    constructor(
      sender: Uint8Array | null = null,
      signature: Uint8Array | null = null,
      tx_id: Uint8Array | null = null
    ) {
      this.sender = sender;
      this.signature = signature;
      this.tx_id = tx_id;
    }
  }

  @unmanaged
  export class is_valid_signature_result {
    static encode(message: is_valid_signature_result, writer: Writer): void {
      if (message.value != false) {
        writer.uint32(8);
        writer.bool(message.value);
      }
    }

    static decode(reader: Reader, length: i32): is_valid_signature_result {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new is_valid_signature_result();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.value = reader.bool();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    value: bool;

    constructor(value: bool = false) {
      this.value = value;
    }
  }
}
