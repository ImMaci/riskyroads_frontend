import React from 'react';
import { Box, Text, Heading, VStack } from "@chakra-ui/react";

const Impressum = () => {
    return (
        <Box padding="4" maxWidth="800px" margin="auto">
            <Heading as="h1" size="xl" textAlign="center" mb="6">
                Imprint
            </Heading>
            <VStack spacing="4" align="start">
                <Box>
                    <Heading as="h2" size="lg">Company Information</Heading>
                    <Text mt="2">Pfada Software</Text>
                    <Text>Koglergasse 20</Text>
                    <Text>8045 Graz</Text>
                </Box>
                <Box>
                    <Heading as="h2" size="lg">Contact Information</Heading>
                    <Text mt="2">Phone: +43 664 4845606</Text>
                    <Text>Email: support@riskyroads.com</Text>
                </Box>
            </VStack>
        </Box>
    );
};

export default Impressum;
