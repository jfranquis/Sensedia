// import { ConflictException, Injectable } from "@nestjs/common";
// import { Customer } from "src/interfaces/customer.interface";

// @Injectable()
// export class CustomerService{
//     private readonly customers: Customer[0 = []];
// }

import { ConflictException, Injectable } from "@nestjs/common";
import { CustomerDto } from "src/dto/create-customer.dto";
import { Customer } from "src/interfaces/customer.interface";

@Injectable()
export class CustomerService {

    private readonly customers: Customer[] = [{ name: "Janaina", idade: 39, documento: "12525688889" }];

    createCustomer(createCustomerDto: CustomerDto) {
        var customerWithFilter: Customer[] = this.customers.filter(customer => createCustomerDto.documento === customer.documento);

        if (customerWithFilter.length > 0) {
            throw new ConflictException("Customer already exists.");
        }

        this.customers.push(createCustomerDto);
    }

    findAll(): Customer[] {
        return this.customers;
    }

}