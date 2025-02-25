import { System } from "@koinos/sdk-as";
import { modsign } from "./proto/modsign";
import { MODULE_SIGN_TYPE_ID } from "./Constants";

export class ModSign {

  callArgs: System.getArgumentsReturn | null;

  contractId: Uint8Array = System.getContractId();

  /**
   * Validates a signature to ensure the authenticity of a transaction.
   * 
   * This method should be overridden by derived classes to implement custom signature validation logic.
   * It returns false by default because the signature validation is passed if at least one validator returns a positive result.
   * 
   * @external
   */
  is_valid_signature(args: modsign.is_valid_signature_args): modsign.is_valid_signature_result {
    System.log("[mod-sign] is_valid_signature called");
    return new modsign.is_valid_signature_result(false);
  }

  /**
   * Handles the installation of the module.
   * 
   * This method is called when the module is installed. It can include logic
   * for setting up the module, initializing storage, or other setup tasks.
   * 
   * @external
   */
  on_install(args: modsign.on_install_args): void {
    System.log("[mod-sign] called module install");
  }

  /**
   * Handles the uninstallation of the module.
   * 
   * This method is called when the module is uninstalled. It can include logic
   * for cleanup tasks, such as removing storage or other resources used by the module.
   * @external
   */
  on_uninstall(args: modsign.on_uninstall_args): void {
    System.log("[mod-sign] called module uninstall");
  }

  /**
   * Checks if the module matches a specific type.
   * 
   * This method is called to verify if the module is of a certain type. It returns
   * a boolean indicating whether the module type matches the provided type ID.
   * @external
   * @readonly
   */
  is_type(args: modsign.is_type_args): modsign.is_type_result {
    const result = new modsign.is_type_result();
    result.value = args.type_id == this.manifest().type_id;
    return result;
  }

  /**
   * @external
   * @readonly
   */
  manifest(): modsign.manifest {
    const result = new modsign.manifest();
    result.name = "Module signature";
    result.description = "Module signature main class";
    result.version = "2.0.0";
    result.type_id = MODULE_SIGN_TYPE_ID;
    return result;
  }
}