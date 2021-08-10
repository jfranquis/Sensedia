import { BadGatewayException, Body, ConflictException, Controller, Get, Post } from '@nestjs/common';
import { CustomerDto } from 'src/dto/create-customer.dto';
import { Customer } from 'src/interfaces/customer.interface';
import { CustomerService } from 'src/services/customer-service';

@Controller('customers')
export class CustomerController {
    constructor(private readonly customerService: CustomerService){}
    private readonly customers: Customer[] = [{ name: "Janaina", idade: 39, documento: "12525688889" }];

    @Get()
    getCustomers(): Customer[] {
        return this.customers;
    }

    @Post()
    creatCustomer(@Body() createCustomerDto: CustomerDto) {
        var customerWithFilter: Customer[] = this.customers.filter(customer => createCustomerDto.documento === customer.documento);

        if (customerWithFilter.length > 0) {
            throw new ConflictException("Customer already exists.")

        }

        this.customers.push(createCustomerDto);


    }
}
