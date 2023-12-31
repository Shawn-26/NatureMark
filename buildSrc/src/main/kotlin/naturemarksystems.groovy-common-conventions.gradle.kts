/*
 * This file was generated by the Gradle 'init' task.
 */

plugins {
    // Apply the groovy Plugin to add support for Groovy.
    groovy
}

repositories {
    // Use Maven Central for resolving dependencies.
    mavenCentral()
}

dependencies {
    constraints {
        // Define dependency versions as constraints
        implementation("org.apache.commons:commons-text:1.10.0")

        implementation("org.codehaus.groovy:groovy-all:3.0.18")
    }

    // Use the latest Groovy version for building this library
    implementation("org.codehaus.groovy:groovy-all")

    // Use JUnit Jupiter for testing.
    testImplementation("org.junit.jupiter:junit-jupiter:5.9.3")

    testRuntimeOnly("org.junit.platform:junit-platform-launcher")
}

tasks.named<Test>("test") {
    // Use JUnit Platform for unit tests.
    useJUnitPlatform()
}
