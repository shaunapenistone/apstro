import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, ScrollView } from 'react-native';

import Background from '../../components/Background';
import Header from '../../components/Header';
import Colors from '../../constants/Colors'

const PrivacyPolicyScreen = props => {

  return (
    <Background>
      <View styles={styles.screen}>
        <Header 
          title='Privacy Policy'
          backButton={true}
          navigateBack={() => {props.navigation.navigate('Auth')}}
        />
        <View style={styles.background}>
          <ScrollView>
            <View>
              <Text style={styles.header}>Policy summary</Text>
              <Text style={styles.header2}>Personal Data collected for the following purposes and using the following services:</Text>
              <Text style={styles.bold}>Analytics:</Text>
              <Text style={styles.paragraph}>
                Google Analytics: Personal Data: Tracker; Usage Data
              </Text>
              <Text style={styles.paragraph}>
                Google Analytics for Firebase: Personal Data; Application opens; launches; number of sessions; number of Users ; session duration; Usage Data
              </Text>
              <Text style={styles.bold}>Contacting the User:</Text>
              <Text style={styles.paragraph}>
                Contact form: Personal Data: country; county; date of birth; email address
              </Text>
              <Text style={styles.bold}>Hosting and backend infrastructure:</Text>
              <Text style={styles.paragraph}>
                Firebase Cloud Firestore and Firebase Realtime Database: Personal Data; Usage Data; various types of Data as specified in the privacy policy of the service
              </Text>
              <Text style={styles.bold}>Infrastructure monitoring</Text>
              <Text style={styles.paragraph}>
                Firebase Performance Monitoring: Personal Data; various types of Data as specified in the privacy policy of the service
              </Text>
              <Text style={styles.bold}>Managing contacts and sending messages</Text>
              <Text style={styles.paragraph}>
                Firebase NotificationsPersonal Data: various types of Data as specified in the privacy policy of the service
              </Text>
              <Text style={styles.bold}>Registration and authentication</Text>
              <Text style={styles.paragraph}>
                Firebase Authentication: Personal Data: email address; first name; password; profile picture; username
              </Text>
              <Text style={styles.header2}>Further information about Personal Data:</Text>
              <Text style={styles.bold}>Push notifications:</Text>
              <Text style={styles.paragraph}>
              Apstro LTD may send push notifications to the User to achieve the purposes outlined in this privacy policy.Users may in most cases opt-out of receiving push notifications by visiting their device settings, such as the notification settings for mobile phones, and then change those settings for Apstro LTD, some or all of the apps on the particular device.
	Users must be aware that disabling push notifications may negatively affect the utility of Apstro LTD.
              </Text>
              <Text style={styles.header2}>Contact Information:</Text>
              <Text style={styles.bold}>Owner and Data Controller</Text>
              <Text style={styles.paragraph}>
                Apstro LTD - 71-75 Shelton Street, Covent Garden, London, United Kingdom, WC2H 9JQ  Owner contact email: apstrobusiness@gmail.com
              </Text>
              <Text style={styles.header2}>Full policy:</Text>
              <Text style={styles.header2}>Owner and Data Controller:</Text>
              <Text style={styles.paragraph}>
                Apstro LTD - 71-75 Shelton Street, Covent Garden, London, United Kingdom, WC2H 9JQ  Owner contact email: apstrobusiness@gmail.com
              </Text>
              <Text style={styles.header2}>Types of Data collected:</Text>
              <Text style={styles.paragraph}>
              Among the types of Personal Data that Apstro LTD collects, by itself or through third parties, there are: date of birth; country; county; email address; Tracker; Usage Data; first name; username; password; profile picture; number of Users ; number of sessions; session duration; Application opens; launches.
Complete details on each type of Personal Data collected are provided in the dedicated sections of this privacy policy or by specific explanation texts displayed prior to the Data collection.
Personal Data may be freely provided by the User, or, in case of Usage Data, collected automatically when using Apstro LTD.
Unless specified otherwise, all Data requested by Apstro LTD is mandatory and failure to provide this Data may make it impossible for Apstro LTD to provide its services. In cases where Apstro LTD specifically states that some Data is not mandatory, Users are free not to communicate this Data without consequences to the availability or the functioning of the Service.
Users who are uncertain about which Personal Data is mandatory are welcome to contact the Owner.
Any use of Cookies – or of other tracking tools – by Apstro LTD or by the owners of third-party services used by Apstro LTD serves the purpose of providing the Service required by the User, in addition to any other purposes described in the present document and in the Cookie Policy, if available.
Users are responsible for any third-party Personal Data obtained, published or shared through Apstro LTD and confirm that they have the third party's consent to provide the Data to the Owner.
              </Text>
              <Text style={styles.header2}>Mode and place of processing the Data:</Text>
              <Text style={styles.bold}>Methods of processing</Text>
              <Text style={styles.paragraph}>
                The Owner takes appropriate security measures to prevent unauthorized access, disclosure, modification, or unauthorized destruction of the Data.
The Data processing is carried out using computers and/or IT enabled tools, following organizational procedures and modes strictly related to the purposes indicated. In addition to the Owner, in some cases, the Data may be accessible to certain types of persons in charge, involved with the operation of Apstro LTD (administration, sales, marketing, legal, system administration) or external parties (such as third-party technical service providers, mail carriers, hosting providers, IT companies, communications agencies) appointed, if necessary, as Data Processors by the Owner. The updated list of these parties may be requested from the Owner at any time.
              </Text>
              <Text style={styles.bold}>Legal basis of processing</Text>
              <Text style={styles.paragraph}>
              The Owner may process Personal Data relating to Users if one of the following applies:
Users have given their consent for one or more specific purposes. Note: Under some legislations the Owner may be allowed to process Personal Data until the User objects to such processing (“opt-out”), without having to rely on consent or any other of the following legal bases. This, however, does not apply, whenever the processing of Personal Data is subject to European data protection law;
provision of Data is necessary for the performance of an agreement with the User and/or for any pre-contractual obligations thereof;
processing is necessary for compliance with a legal obligation to which the Owner is subject;
processing is related to a task that is carried out in the public interest or in the exercise of official authority vested in the Owner;
processing is necessary for the purposes of the legitimate interests pursued by the Owner or by a third party.
In any case, the Owner will gladly help to clarify the specific legal basis that applies to the processing, and in particular whether the provision of Personal Data is a statutory or contractual requirement, or a requirement necessary to enter into a contract. 
              </Text>
              <Text style={styles.bold}>Place</Text>
              <Text style={styles.paragraph}>
              The Data is processed at the Owner's operating offices and in any other places where the parties involved in the processing are located.
Depending on the User's location, data transfers may involve transferring the User's Data to a country other than their own. To find out more about the place of processing of such transferred Data, Users can check the section containing details about the processing of Personal Data.
Users are also entitled to learn about the legal basis of Data transfers to a country outside the European Union or to any international organization governed by public international law or set up by two or more countries, such as the UN, and about the security measures taken by the Owner to safeguard their Data.
If any such transfer takes place, Users can find out more by checking the relevant sections of this document or inquire with the Owner using the information provided in the contact section.
              </Text>
              <Text style={styles.bold}>Retention time</Text>
              <Text style={styles.paragraph}>
              Personal Data shall be processed and stored for as long as required by the purpose they have been collected for.
Therefore:
Personal Data collected for purposes related to the performance of a contract between the Owner and the User shall be retained until such contract has been fully performed.
Personal Data collected for the purposes of the Owner’s legitimate interests shall be retained as long as needed to fulfill such purposes. Users may find specific information regarding the legitimate interests pursued by the Owner within the relevant sections of this document or by contacting the Owner.
The Owner may be allowed to retain Personal Data for a longer period whenever the User has given consent to such processing, as long as such consent is not withdrawn. Furthermore, the Owner may be obliged to retain Personal Data for a longer period whenever required to do so for the performance of a legal obligation or upon order of an authority.

Once the retention period expires, Personal Data shall be deleted. Therefore, the right of access, the right to erasure, the right to rectification and the right to data portability cannot be enforced after expiration of the retention period.
              </Text>
              <Text style={styles.header2}>The purposes of processing</Text>
              <Text style={styles.paragraph}>
              The Data concerning the User is collected to allow the Owner to provide its Service, comply with its legal obligations, respond to enforcement requests, protect its rights and interests (or those of its Users or third parties), detect any malicious or fraudulent activity, as well as the following: Contacting the User, Analytics, Registration and authentication, Hosting and backend infrastructure, Infrastructure monitoring and Managing contacts and sending messages.
For specific information about the Personal Data used for each purpose, the User may refer to the section “Detailed information on the processing of Personal Data”.
              </Text>
              <Text style={styles.header2}>Detailed information on the processing of Personal Data</Text>
              <Text style={styles.paragraph}>
                Personal Data is collected for the following purposes and using the following services:
              </Text>
              <Text style={styles.bold}>Analytics</Text>
              <Text style={styles.paragraph}>
                The services contained in this section enable the Owner to monitor and analyze web traffic and can be used to keep track of User behavior.
              </Text>
              <Text style={styles.bold}>Google Analytics</Text>
              <Text style={styles.paragraph}>
              Google Analytics is a web analysis service provided by Google LLC or by Google Ireland Limited, depending on the location Apstro LTD is accessed from, (“Google”). Google utilizes the Data collected to track and examine the use of Apstro LTD, to prepare reports on its activities and share them with other Google services.
Google may use the Data collected to contextualize and personalize the ads of its own advertising network.
Personal Data processed: Tracker; Usage Data.
Place of processing: United States – Privacy Policy – Opt Out; Ireland – Privacy Policy – Opt Out.
Category of personal information collected according to CCPA: internet information.
This processing constitutes a sale based on the definition under the CCPA. In addition to the information in this clause, the User can find information regarding how to opt out of the sale in the section detailing the rights of Californian consumers.
              </Text>
              <Text style={styles.bold}>Google Analytics for Firebase</Text>
              <Text style={styles.paragraph}>
                Google Analytics for Firebase or Firebase Analytics is an analytics service provided by Google LLC or by Google Ireland Limited, depending on the location Apstro LTD is accessed from.
              </Text>
              <Text style={styles.paragraph}>
              Google Analytics for Firebase
Google Analytics for Firebase or Firebase Analytics is an analytics service provided by Google LLC or by Google Ireland Limited, depending on the location Apstro LTD is accessed from.
In order to understand Google's use of Data, consult Google's partner policy. Firebase Analytics may share Data with other tools provided by Firebase, such as Crash Reporting, Authentication, Remote Config or Notifications. The User may check this privacy policy to find a detailed explanation about the other tools used by the Owner. Apstro LTD uses identifiers for mobile devices and technologies similar to cookies to run the Firebase Analytics service. Users may opt-out of certain Firebase features through applicable device settings, such as the device advertising settings for mobile phones or by following the instructions in other Firebase related sections of this privacy policy, if available.
Personal Data processed: Application opens; launches; number of sessions; number of Users ; session duration; Usage Data.
Place of processing: United States – Privacy Policy; Ireland – Privacy Policy.
Category of personal information collected according to CCPA: internet information.
              </Text>
              <Text style={styles.header2}>Contacting the User:</Text>
              <Text style={styles.bold}>Contact form (Apstro LTD)</Text>
              <Text style={styles.paragraph}>
              By filling in the contact form with their Data, the User authorizes Apstro LTD to use these details to reply to requests for information, quotes or any other kind of request as indicated by the form’s header.
Personal Data processed: country; county; date of birth; email address.
Category of personal information collected according to CCPA: identifiers.
              </Text>
              <Text style={styles.bold}>Managing contacts and sending messages</Text>
              <Text style={styles.paragraph}>
              This type of service makes it possible to manage a database of email contacts, phone contacts or any other contact information to communicate with the User.
These services may also collect data concerning the date and time when the message was viewed by the User, as well as when the User interacted with it, such as by clicking on links included in the message.
              </Text>
              <Text style={styles.bold}>Firebase Notifications</Text>
              <Text style={styles.paragraph}>
              Firebase Notifications is a message sending service provided by Google LLC or by Google Ireland Limited, depending on the location Apstro LTD is accessed from. Firebase Notifications can be integrated with Firebase Analytics to target analytics-based audiences and track opening and conversion events.
Personal Data processed: various types of Data as specified in the privacy policy of the service.
Place of processing: United States – Privacy Policy; Ireland – Privacy Policy.
Category of personal information collected according to CCPA: internet information.
              </Text>
              <Text style={styles.bold}>Infrastructure monitoring</Text>
              <Text style={styles.paragraph}>
              This type of service allows Apstro LTD to monitor the use and behavior of its components so its performance, operation, maintenance and troubleshooting can be improved.
Which Personal Data are processed depends on the characteristics and mode of implementation of these services, whose function is to filter the activities of Apstro LTD.
              </Text>
              <Text style={styles.bold}>Firebase Performance Monitoring</Text>
              <Text style={styles.paragraph}>
              Firebase Performance Monitoring is a monitoring service provided by Google LLC or by Google Ireland Limited, depending on the location Apstro LTD is accessed from.
Personal Data processed: various types of Data as specified in the privacy policy of the service.
Place of processing: United States – Privacy Policy; Ireland – Privacy Policy.
Category of personal information collected according to CCPA: internet information.
              </Text>
              <Text style={styles.bold}>Registration and authentication</Text>
              <Text style={styles.paragraph}>
              By registering or authenticating, Users allow Apstro LTD to identify them and give them access to dedicated services.
Depending on what is described below, third parties may provide registration and authentication services. In this case, Apstro LTD will be able to access some Data, stored by these third-party services, for registration or identification purposes. 
Some of the services listed below may also collect Personal Data for targeting and profiling purposes; to find out more, please refer to the description of each service.
              </Text>
              <Text style={styles.bold}>Firebase Authentication</Text>
              <Text style={styles.paragraph}>
              Firebase Authentication is a registration and authentication service provided by Google LLC or by Google Ireland Limited, depending on the location Apstro LTD is accessed from. To simplify the registration and authentication process, Firebase Authentication can make use of third-party identity providers and save the information on its platform.
Personal Data processed: email address; first name; password; profile picture; username.
Place of processing: United States – Privacy Policy; Ireland – Privacy Policy.
Category of personal information collected according to CCPA: identifiers; sensorial information.
This processing constitutes a sale based on the definition under the CCPA. In addition to the information in this clause, the User can find information regarding how to opt out of the sale in the section detailing the rights of Californian consumers.
              </Text>
              <Text style={styles.header2}>Further information about Personal Data:</Text>
              <Text style={styles.bold}>Push notifications</Text>
              <Text style={styles.paragraph}>
              Apstro LTD may send push notifications to the User to achieve the purposes outlined in this privacy policy. Users may in most cases opt-out of receiving push notifications by visiting their device settings, such as the notification settings for mobile phones, and then change those settings for Apstro LTD, some or all of the apps on the particular device.
	Users must be aware that disabling push notifications may negatively affect the utility of Apstro LTD.
              </Text>
              <Text style={styles.header2}>The Rights of Users:</Text>
              <Text style={styles.paragraph}>
              Users may exercise certain rights regarding their Data processed by the Owner.
In particular, Users have the right to do the following:
Withdraw their consent at any time. Users have the right to withdraw consent where they have previously given their consent to the processing of their Personal Data.
Object to processing of their Data. Users have the right to object to the processing of their Data if the processing is carried out on a legal basis other than consent. Further details are provided in the dedicated section below.
Access their Data. Users have the right to learn if Data is being processed by the Owner, obtain disclosure regarding certain aspects of the processing and obtain a copy of the Data undergoing processing.
Verify and seek rectification. Users have the right to verify the accuracy of their Data and ask for it to be updated or corrected.
Restrict the processing of their Data. Users have the right, under certain circumstances, to restrict the processing of their Data. In this case, the Owner will not process their Data for any purpose other than storing it.
Have their Personal Data deleted or otherwise removed. Users have the right, under certain circumstances, to obtain the erasure of their Data from the Owner.
Receive their Data and have it transferred to another controller. Users have the right to receive their Data in a structured, commonly used and machine readable format and, if technically feasible, to have it transmitted to another controller without any hindrance. This provision is applicable provided that the Data is processed by automated means and that the processing is based on the User's consent, on a contract which the User is part of or on pre-contractual obligations thereof.
Lodge a complaint. Users have the right to bring a claim before their competent data protection authority.
              </Text>
              <Text style={styles.bold}>Details about the right to object to processing:</Text>
              <Text style={styles.paragraph}>
Where Personal Data is processed for a public interest, in the exercise of an official authority vested in the Owner or for the purposes of the legitimate interests pursued by the Owner, Users may object to such processing by providing a ground related to their particular situation to justify the objection.
Users must know that, however, should their Personal Data be processed for direct marketing purposes, they can object to that processing at any time without providing any justification. To learn, whether the Owner is processing Personal Data for direct marketing purposes, Users may refer to the relevant sections of this document.
              </Text>
              <Text style={styles.bold}>How to exercise these rights:</Text>
              <Text style={styles.paragraph}>
              Any requests to exercise User rights can be directed to the Owner through the contact details provided in this document. These requests can be exercised free of charge and will be addressed by the Owner as early as possible and always within one month.
              </Text>
              <Text style={styles.header2}>Additional information about Data collection and processing:</Text>
              <Text style={styles.bold}>Legal action:</Text>
              <Text style={styles.paragraph}>
              The User's Personal Data may be used for legal purposes by the Owner in Court or in the stages leading to possible legal action arising from improper use of Apstro LTD or the related Services.
The User declares to be aware that the Owner may be required to reveal personal data upon request of public authorities.
              </Text>
              <Text style={styles.bold}>Additional information about User's Personal Data:</Text>
              <Text style={styles.paragraph}>
              In addition to the information contained in this privacy policy, Apstro LTD may provide the User with additional and contextual information concerning particular Services or the collection and processing of Personal Data upon request.
              </Text>
              <Text style={styles.bold}>System logs and maintenance:</Text>
              <Text style={styles.paragraph}>
              For operation and maintenance purposes, Apstro LTD and any third-party services may collect files that record interaction with Apstro LTD (System logs) use other Personal Data (such as the IP Address) for this purpose.
              </Text>
              <Text style={styles.bold}>Information not contained in this policy:</Text>
              <Text style={styles.paragraph}>
              More details concerning the collection or processing of Personal Data may be requested from the Owner at any time. Please see the contact information at the beginning of this document.
              </Text>
              <Text style={styles.bold}>How “Do Not Track” requests are handled:</Text>
              <Text style={styles.paragraph}>
              Apstro LTD does not support “Do Not Track” requests.
To determine whether any of the third-party services it uses honor the “Do Not Track” requests, please read their privacy policies.
              </Text>
              <Text style={styles.bold}>Changes to this privacy policy:</Text>
              <Text style={styles.paragraph}>
              The Owner reserves the right to make changes to this privacy policy at any time by notifying its Users on this page and possibly within Apstro LTD and/or - as far as technically and legally feasible - sending a notice to Users via any contact information available to the Owner. It is strongly recommended to check this page often, referring to the date of the last modification listed at the bottom. 
Should the changes affect processing activities performed on the basis of the User’s consent, the Owner shall collect new consent from the User, where required.
              </Text>
              <Text style={styles.header2}>Information for Californian consumers:</Text>
              <Text style={styles.paragraph}>
              This part of the document integrates with and supplements the information contained in the rest of the privacy policy and is provided by the business running Apstro LTD and, if the case may be, its parent, subsidiaries and affiliates (for the purposes of this section referred to collectively as “we”, “us”, “our”).
The provisions contained in this section apply to all Users who are consumers residing in the state of California, United States of America, according to "The California Consumer Privacy Act of 2018" (Users are referred to below, simply as “you”, “your”, “yours”), and, for such consumers, these provisions supersede any other possibly divergent or conflicting provisions contained in the privacy policy.
This part of the document uses the term “personal information“ as it is defined in The California Consumer Privacy Act (CCPA).
              </Text>
              <Text style={styles.bold}>Categories of personal information collected, disclosed or sold:</Text>
              <Text style={styles.paragraph}>
              In this section we summarize the categories of personal information that we've collected, disclosed or sold and the purposes thereof. You can read about these activities in detail in the section titled “Detailed information on the processing of Personal Data” within this document.
Information we collect: the categories of personal information we collect
We have collected the following categories of personal information about you: identifiers, internet information and sensorial information.
We will not collect additional categories of personal information without notifying you.
              </Text>
              <Text style={styles.bold}>How we collect information: what are the sources of the personal information we collect?:</Text>
              <Text style={styles.paragraph}>
              We collect the above mentioned categories of personal information, either directly or indirectly, from you when you use Apstro LTD.
For example, you directly provide your personal information when you submit requests via any forms on Apstro LTD. You also provide personal information indirectly when you navigate Apstro LTD, as personal information about you is automatically observed and collected. Finally, we may collect your personal information from third parties that work with us in connection with the Service or with the functioning of Apstro LTD and features thereof.
              </Text>
              <Text style={styles.bold}>How we use the information we collect: sharing and disclosing of your personal information with third parties for a business purpose:</Text>
              <Text style={styles.paragraph}>
              We may disclose the personal information we collect about you to a third party for business purposes. In this case, we enter a written agreement with such third party that requires the recipient to both keep the personal information confidential and not use it for any purpose(s) other than those necessary for the performance of the agreement.
We may also disclose your personal information to third parties when you explicitly ask or authorize us to do so, in order to provide you with our Service.
To find out more about the purposes of processing, please refer to the relevant section of this document.
              </Text>
              <Text style={styles.bold}>Sale of your personal information:</Text>
              <Text style={styles.paragraph}>
              For our purposes, the word “sale” means any “selling, renting, releasing, disclosing, disseminating, making available, transferring or otherwise communicating orally, in writing, or by electronic means, a consumer's personal information by the business to another business or a third party, for monetary or other valuable consideration”.
This means that, for example, a sale can happen whenever an application runs ads, or makes statistical analyses on the traffic or views, or simply because it uses tools such as social network plugins and the like.
              </Text>
              <Text style={styles.bold}>Sale of your personal information:</Text>
              <Text style={styles.paragraph}>
              For our purposes, the word “sale” means any “selling, renting, releasing, disclosing, disseminating, making available, transferring or otherwise communicating orally, in writing, or by electronic means, a consumer's personal information by the business to another business or a third party, for monetary or other valuable consideration”.
This means that, for example, a sale can happen whenever an application runs ads, or makes statistical analyses on the traffic or views, or simply because it uses tools such as social network plugins and the like.
              </Text>
              <Text style={styles.bold}>Your right to opt out of the sale of personal information:</Text>
              <Text style={styles.paragraph}>
              You have the right to opt out of the sale of your personal information. This means that whenever you request us to stop selling your data, we will abide by your request.
Such requests can be made freely, at any time, without submitting any verifiable request, simply by following the instructions below.
              </Text>
              <Text style={styles.bold}>Instructions to opt out of the sale of personal information:</Text>
              <Text style={styles.paragraph}>
              If you’d like to know more, or exercise your right to opt out in regard to all the sales carried out by Apstro LTD, both online and offline, you can contact us for further information using the contact details provided in this document.
              </Text>
              <Text style={styles.bold}>Your California privacy rights and how to exercise them:</Text>
              <Text style={styles.bold}>The right to know and to portability:</Text>
              <Text style={styles.paragraph}>
              You have the right to request that we disclose to you:
the categories and sources of the personal information that we collect about you, the purposes for which we use your information and with whom such information is shared;
in case of sale of personal information or disclosure for a business purpose, two separate lists where we disclose:
for sales, the personal information categories purchased by each category of recipient; and
for disclosures for a business purpose, the personal information categories obtained by each category of recipient.
The disclosure described above will be limited to the personal information collected or used over the past 12 months.
If we deliver our response electronically, the information enclosed will be "portable", i.e. delivered in an easily usable format to enable you to transmit the information to another entity without hindrance – provided that this is technically feasible.
              </Text>
              <Text style={styles.bold}>How to exercise your rights:</Text>
              <Text style={styles.paragraph}>
              To exercise the rights described above, you need to submit your verifiable request to us by contacting us via the details provided in this document.
For us to respond to your request, it’s necessary that we know who you are. Therefore, you can only exercise the above rights by making a verifiable request which must:
provide sufficient information that allows us to reasonably verify you are the person about whom we collected personal information or an authorized representative;
describe your request with sufficient detail that allows us to properly understand, evaluate, and respond to it.
We will not respond to any request if we are unable to verify your identity and therefore confirm the personal information in our possession actually relates to you.
If you cannot personally submit a verifiable request, you can authorize a person registered with the California Secretary of State to act on your behalf.
If you are an adult, you can make a verifiable request on behalf of a minor under your parental authority.
You can submit a maximum number of 2 requests over a period of 12 months.
              </Text>
              <Text style={styles.bold}>How and when we are expected to handle your request:</Text>
              <Text style={styles.paragraph}>
              We will confirm receipt of your verifiable request within 10 days and provide information about how we will process your request.
We will respond to your request within 45 days of its receipt. Should we need more time, we will explain to you the reasons why, and how much more time we need. In this regard, please note that we may take up to 90 days to fulfill your request.
Our disclosure(s) will cover the preceding 12 month period.
Should we deny your request, we will explain you the reasons behind our denial.
We do not charge a fee to process or respond to your verifiable request unless such request is manifestly unfounded or excessive. In such cases, we may charge a reasonable fee, or refuse to act on the request. In either case, we will communicate our choices and explain the reasons behind it.
              </Text>
              <Text style={styles.header2}>Definitions and legal references:</Text>
              <Text style={styles.bold}>Personal Data (or Data):</Text>
              <Text style={styles.paragraph}>
              Any information that directly, indirectly, or in connection with other information — including a personal identification number — allows for the identification or identifiability of a natural person.
              </Text>
              <Text style={styles.bold}>Usage Data:</Text>
              <Text style={styles.paragraph}>
              Information collected automatically through Apstro LTD (or third-party services employed in Apstro LTD), which can include: the IP addresses or domain names of the computers utilized by the Users who use Apstro LTD, the URI addresses (Uniform Resource Identifier), the time of the request, the method utilized to submit the request to the server, the size of the file received in response, the numerical code indicating the status of the server's answer (successful outcome, error, etc.), the country of origin, the features of the browser and the operating system utilized by the User, the various time details per visit (e.g., the time spent on each page within the Application) and the details about the path followed within the Application with special reference to the sequence of pages visited, and other parameters about the device operating system and/or the User's IT environment.
              </Text>
              <Text style={styles.bold}>User:</Text>
              <Text style={styles.paragraph}>
              The individual using Apstro LTD who, unless otherwise specified, coincides with the Data Subject.
              </Text>
              <Text style={styles.bold}>Data Subject:</Text>
              <Text style={styles.paragraph}>
              The natural person to whom the Personal Data refers.
              </Text>
              <Text style={styles.bold}>Data Processor (or Data Supervisor):</Text>
              <Text style={styles.paragraph}>
              The natural or legal person, public authority, agency or other body which processes Personal Data on behalf of the Controller, as described in this privacy policy.
              </Text>
              <Text style={styles.bold}>User:</Text>
              <Text style={styles.paragraph}>
              The individual using Apstro LTD who, unless otherwise specified, coincides with the Data Subject.
              </Text>
              <Text style={styles.bold}>Data Controller (or Owner):</Text>
              <Text style={styles.paragraph}>
              The natural or legal person, public authority, agency or other body which, alone or jointly with others, determines the purposes and means of the processing of Personal Data, including the security measures concerning the operation and use of Apstro LTD. The Data Controller, unless otherwise specified, is the Owner of Apstro LTD.
              </Text>
              <Text style={styles.bold}>Apstro LTD (or this Application):</Text>
              <Text style={styles.paragraph}>
              The means by which the Personal Data of the User is collected and processed.
              </Text>
              <Text style={styles.bold}>Service:</Text>
              <Text style={styles.paragraph}>
              The service provided by Apstro LTD as described in the relative terms (if available) and on this site/application.
              </Text>
              <Text style={styles.bold}>European Union (or EU):</Text>
              <Text style={styles.paragraph}>
              Unless otherwise specified, all references made within this document to the European Union include all current member states to the European Union and the European Economic Area.
              </Text>
              <Text style={styles.bold}>Cookie:</Text>
              <Text style={styles.paragraph}>
              Cookies are Trackers consisting of small sets of data stored in the User's browser.
              </Text>
              <Text style={styles.bold}>Tracker:</Text>
              <Text style={styles.paragraph}>
              Tracker indicates any technology - e.g Cookies, unique identifiers, web beacons, embedded scripts, e-tags and fingerprinting - that enables the tracking of Users, for example by accessing or storing information on the User’s device.
              </Text>
              <Text style={styles.bold}>Legal information:</Text>
              <Text style={styles.paragraph}>
              This privacy statement has been prepared based on provisions of multiple legislations, including Art. 13/14 of Regulation (EU) 2016/679 (General Data Protection Regulation).
This privacy policy relates solely to Apstro LTD, if not stated otherwise within this document.
              </Text>
            </View>
          </ScrollView>
        </View>
      </View>
    </Background>
  )
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontFamily: 'lexend-regular',
    fontSize: 25,
    color: 'gray',
    alignSelf: 'center',
    justifyContent: 'center',
    padding: 5
  },
  container: {
    marginVertical: 60,
    padding: 20
  },
  background: {
    backgroundColor: Colors.opaque,
    alignSelf: 'center',
    color: 'gray',
    borderRadius: 30,
    justifyContent: 'center',
    width: '90%',
    height: '88%',
    alignItems: "center",
    margin: '3%',
    overflow: 'hidden'
  },
  header2: {
    fontFamily: 'lexend-light',
    fontSize: 20,
    color: 'gray',
    alignSelf: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: 5
  },
  bold: {
    fontFamily: 'lexend-regular',
    fontSize: 17,
    color: 'gray',
    alignSelf: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: 5
  },
  paragraph: {
    fontFamily: 'lexend-light',
    fontSize: 15,
    color: 'gray',
    padding: 5
  }
})

export default PrivacyPolicyScreen;
