
var EC2 = {
    Instance: [
        {
            name: 'AvailabilityZone',
            type: 'String',
            required: false
        },
        {
            name: 'BlockDeviceMappings',
            type: '',
            required: false
        },
        {
            name: 'DisableApiTermination',
            type: 'Boolean',
            required: false
        },
        {
            name: 'EbsOptimized',
            type: 'Boolean',
            required: false
        },
        {
            name: 'IamInstanceProfile',
            type: 'String',
            required: false
        },
        {
            name: 'ImageId',
            type: 'String',
            required: true
        },
        {
            name: 'InstanceInitiatedShutdownBehavior',
            type: ['stop', 'terminate'],
            required: false
        },
        {
            name: 'InstanceType',
            type: [],
            required: false
        },
        {
            name: 'KernelId',
            type: 'String',
            required: false
        },
        {
            name: 'KeyName',
            type: 'String',
            required: false
        },
        {
            name: 'Monitoring',
            type: 'Boolean',
            required: false
        },
        {
            "" : [ EC2 Network Interface, ... ],
            name: 'NetworkInterfaces',
            type: '',
            required: false
        },
        {
            name: 'PlacementGroupName',
            type: 'String',
            required: false
        },
        {
            name: 'PrivateIpAddress',
            type: 'String',
            required: false
        },
        {
            name: 'RamdiskId',
            type: 'String',
            required: false
        },
        {
            "" : [ String, ... ],
            name: 'SecurityGroupIds',
            type: '',
            required: false
        },
        {
            "SecurityGroups" : [ String, ... ],
            name: '',
            type: '',
            required: false
        },
        {
            name: 'SourceDestCheck',
            type: 'Boolean',
            required: false
        },
        {
            "SsmAssociations" : [ SSMAssociation, ... ]
            name: '',
            type: '',
            required: false
        },
        {
            name: 'SubnetId',
            type: 'String',
            required: false
        },
        {
            "Tags" : [ Resource Tag, ... ],
            name: '',
            type: '',
            required: false
        },
        {
            "Tenancy" : String,
            name: '',
            type: '',
            required: false
        },
        {
            "UserData" : String,
            name: '',
            type: '',
            required: false
        },
        {
            "" : [ EC2 MountPoint, ... ],
            name: 'Volumes',
            type: '',
            required: false
        },
        {
            name: 'AdditionalInfo',
            type: 'String',
            required: false
        }
    ],
    VPC: [
        "CidrBlock" : String,
        "EnableDnsSupport" : Boolean,
        "EnableDnsHostnames" : Boolean,
        "InstanceTenancy" : String,
        "Tags" : [ Resource Tag, ... ]
    ]
};
