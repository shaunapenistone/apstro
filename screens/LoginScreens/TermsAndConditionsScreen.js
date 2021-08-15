import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, ScrollView } from 'react-native';

import Background from '../../components/Background';
import Header from '../../components/Header';
import Colors from '../../constants/Colors'


const TermsAndConditionsScreen = props => {

  return (
    <Background>
      <View styles={styles.screen}>
        <Header 
          title='Terms and Conditions'
          backButton={true}
          navigateBack={() => {props.navigation.navigate('Auth')}}
        />
        <View style={styles.background}>
          <ScrollView>
            <View>
              <Text style={styles.header}>Terms and Conditions of Apstro LTD</Text>
              <Text style={styles.paragraph}>
              These Terms govern the use of Apstro LTD, and, any other related Agreement or legal relationship with the Owner in a legally binding way. Capitalized words are defined in the relevant dedicated section of this document. The User must read this document carefully. Although the entire contractual relationship relating to these Products is entered into solely by the Owner and Users, Users acknowledge and agree that, where Apstro LTD has been provided to them via the Apple App Store, Apple may enforce these Terms as a third-party beneficiary. Apstro LTD is provided by: Apstro LTD 71-75 Shelton Street, Covent Garden, London, United Kingdom, WC2H 9JQ Owner contact email: apstrobusiness@gmail.com "Apstro LTD" refers to this website, including its subdomains and any other website through which the Owner makes its Service available;
applications for mobile, tablet and other smart device systems; the Application Program Interfaces (API); the Service; any applications, sample and content files, source code, scripts, instruction sets or software included as part of the Service, as well as any related documentation; The following documents are incorporated by reference into these Terms:
              </Text>
              <Text style={styles.header2}>What the User should know at a glance:</Text>
              <Text style={styles.paragraph}>
              Please note that some provisions in these Terms may only apply to certain categories of Users. In particular, certain provisions may only apply to Consumers or to those Users that do not qualify as Consumers. Such limitations are always explicitly mentioned within each affected clause. In the absence of any such mention, clauses apply to all Users.
Usage of Apstro LTD and the Service is age restricted: to access and use Apstro LTD and its Service the User must be an adult under applicable law.
              </Text>
              <Text style={styles.header2}>TERMS OF USE</Text>
              <Text style={styles.paragraph}>
              Unless otherwise specified, the terms of use detailed in this section apply generally when using Apstro LTD. Single or additional conditions of use or access may apply in specific scenarios and in such cases are additionally indicated within this document. By using Apstro LTD, Users confirm to meet the following requirements: There are no restrictions for Users in terms of being Consumers or Business Users;
Users must be recognized as adult by applicable law; Users aren’t located in a country that is subject to a U.S. Government embargo, or that has been designated by the U.S. Government as a “terrorist-supporting” country; Users aren’t listed on any U.S. Government list of prohibited or restricted parties;
              </Text>
              <Text style={styles.header2}>Account registration</Text>
              <Text style={styles.paragraph}>
              To use the Service Users must register or create a User account, providing all required data or information in a complete and truthful manner.
Failure to do so will cause unavailability of the Service.
Users are responsible for keeping their login credentials confidential and safe. For this reason, Users are also required to choose passwords that meet the highest standards of strength permitted by Apstro LTD.
By registering, Users agree to be fully responsible for all activities that occur under their username and password.
Users are required to immediately and unambiguously inform the Owner via the contact details indicated in this document, if they think their personal information, including but not limited to User accounts, access credentials or personal data, have been violated, unduly disclosed or stolen.
              </Text>
              <Text style={styles.bold}>Account termination:</Text>
              <Text style={styles.paragraph}>
              Users can terminate their account and stop using the Service at any time by doing the following:
By directly contacting the Owner at the contact details provided in this document.
              </Text>
              <Text style={styles.bold}>Account suspension and deletion:</Text>
              <Text style={styles.paragraph}>
              The Owner reserves the right, at its sole discretion, to suspend or delete at any time and without notice, User accounts which it deems inappropriate, offensive or in violation of these Terms.
The suspension or deletion of User accounts shall not entitle Users to any claims for compensation, damages or reimbursement.
The suspension or deletion of accounts due to causes attributable to the User does not exempt the User from paying any applicable fees or prices.
              </Text>
              <Text style={styles.header2}>Content on Apstro LTD</Text>
              <Text style={styles.paragraph}>
              Unless where otherwise specified or clearly recognizable, all content available on Apstro LTD is owned or provided by the Owner or its licensors.
The Owner undertakes its utmost effort to ensure that the content provided on Apstro LTD infringes no applicable legal provisions or third-party rights. However, it may not always be possible to achieve such a result.
In such cases, without prejudice to any legal prerogatives of Users to enforce their rights, Users are kindly asked to preferably report related complaints using the contact details provided in this document.
              </Text>
              <Text style={styles.bold}>Rights regarding content on Apstro LTD - All rights reserved:</Text>
              <Text style={styles.paragraph}>
              The Owner holds and reserves all intellectual property rights for any such content.
Users may not therefore use such content in any way that is not necessary or implicit in the proper use of the Service.
In particular, but without limitation, Users may not copy, download, share (beyond the limits set forth below), modify, translate, transform, publish, transmit, sell, sublicense, edit, transfer/assign to third parties or create derivative works from the content available on Apstro LTD, nor allow any third party to do so through the User or their device, even without the User's knowledge.
Where explicitly stated on Apstro LTD, the User may download, copy and/or share some content available through Apstro LTD for its sole personal and non-commercial use and provided that the copyright attributions and all the other attributions requested by the Owner are correctly implemented.
Any applicable statutory limitation or exception to copyright shall stay unaffected.
              </Text>
              <Text style={styles.header2}>Access to external resources </Text>
              <Text style={styles.paragraph}>
              Through Apstro LTD Users may have access to external resources provided by third parties. Users acknowledge and accept that the Owner has no control over such resources and is therefore not responsible for their content and availability.
Conditions applicable to any resources provided by third parties, including those applicable to any possible grant of rights in content, result from each such third parties’ terms and conditions or, in the absence of those, applicable statutory law.
              </Text>
              <Text style={styles.header2}>Acceptable use</Text>
              <Text style={styles.paragraph}>
              Apstro LTD and the Service may only be used within the scope of what they are provided for, under these Terms and applicable law.
Users are solely responsible for making sure that their use of Apstro LTD and/or the Service violates no applicable law, regulations or third-party rights.
Therefore, the Owner reserves the right to take any appropriate measure to protect its legitimate interests including by denying Users access to Apstro LTD or the Service, terminating contracts, reporting any misconduct performed through Apstro LTD or the Service to the competent authorities – such as judicial or administrative authorities - whenever Users engage or are suspected to engage in any of the following activities:
violate laws, regulations and/or these Terms;
infringe any third-party rights;
considerably impair the Owner’s legitimate interests;
offend the Owner or any third party.
              </Text>
              <Text style={styles.header2}>API usage terms</Text>
              <Text style={styles.paragraph}>
              Users may access their data relating to Apstro LTD via the Application Program Interface (API). Any use of the API, including use of the API through a third-party product/service that accesses Apstro LTD, is bound by these Terms and, in addition, by the following specific terms:
the User expressly understands and agrees that the Owner bears no responsibility and shall not be held liable for any damages or losses resulting from the User’s use of the API or their use of any third-party products/services that access data through the API.
              </Text>
              <Text style={styles.header}>Liability and indemnification</Text>
              <Text style={styles.header2}>Australian Users</Text>
              <Text style={styles.bold}>Limitation of liability:</Text>
              <Text style={styles.paragraph}>
              Nothing in these Terms excludes, restricts or modifies any guarantee, condition, warranty, right or remedy which the User may have under the Competition and Consumer Act 2010 (Cth) or any similar State and Territory legislation and which cannot be excluded, restricted or modified (non-excludable right). To the fullest extent permitted by law, our liability to the User, including liability for a breach of a non-excludable right and liability which is not otherwise excluded under these Terms of Use, is limited, at the Owner’s sole discretion, to the re-performance of the services or the payment of the cost of having the services supplied again.
              </Text>
              <Text style={styles.header2}>US Users</Text>
              <Text style={styles.bold}>Disclaimer of Warranties:</Text>
              <Text style={styles.paragraph}>
              Apstro LTD is provided strictly on an “as is” and “as available” basis. Use of the Service is at Users’ own risk. To the maximum extent permitted by applicable law, the Owner expressly disclaims all conditions, representations, and warranties — whether express, implied, statutory or otherwise, including, but not limited to, any implied warranty of merchantability, fitness for a particular purpose, or non-infringement of third-party rights. No advice or information, whether oral or written, obtained by user from owner or through the Service will create any warranty not expressly stated herein.
Without limiting the foregoing, the Owner, its subsidiaries, affiliates, licensors, officers, directors, agents, co-branders, partners, suppliers and employees do not warrant that the content is accurate, reliable or correct; that the Service will meet Users’ requirements; that the Service will be available at any particular time or location, uninterrupted or secure; that any defects or errors will be corrected; or that the Service is free of viruses or other harmful components. Any content downloaded or otherwise obtained through the use of the Service is downloaded at users own risk and users shall be solely responsible for any damage to Users’ computer system or mobile device or loss of data that results from such download or Users’ use of the Service.
The Owner does not warrant, endorse, guarantee, or assume responsibility for any product or service advertised or offered by a third party through the Service or any hyperlinked website or service, and the Owner shall not be a party to or in any way monitor any transaction between Users and third-party providers of products or services.
The Service may become inaccessible or it may not function properly with Users’ web browser, mobile device, and/or operating system. The owner cannot be held liable for any perceived or actual damages arising from Service content, operation, or use of this Service.
Federal law, some states, and other jurisdictions, do not allow the exclusion and limitations of certain implied warranties. The above exclusions may not apply to Users. This Agreement gives Users specific legal rights, and Users may also have other rights which vary from state to state. The disclaimers and exclusions under this agreement shall not apply to the extent prohibited by applicable law.
              </Text>
              <Text style={styles.bold}>Limitations of liability:</Text>
              <Text style={styles.paragraph}>
              To the maximum extent permitted by applicable law, in no event shall the Owner, and its subsidiaries, affiliates, officers, directors, agents, co-branders, partners, suppliers and employees be liable for
any indirect, punitive, incidental, special, consequential or exemplary damages, including without limitation damages for loss of profits, goodwill, use, data or other intangible losses, arising out of or relating to the use of, or inability to use, the Service; and
any damage, loss or injury resulting from hacking, tampering or other unauthorized access or use of the Service or User account or the information contained therein;
any errors, mistakes, or inaccuracies of content;
personal injury or property damage, of any nature whatsoever, resulting from User access to or use of the Service;
any unauthorized access to or use of the Owner’s secure servers and/or any and all personal information stored therein;
any interruption or cessation of transmission to or from the Service;
any bugs, viruses, trojan horses, or the like that may be transmitted to or through the Service;
any errors or omissions in any content or for any loss or damage incurred as a result of the use of any content posted, emailed, transmitted, or otherwise made available through the Service; and/or
the defamatory, offensive, or illegal conduct of any User or third party. In no event shall the Owner, and its subsidiaries, affiliates, officers, directors, agents, co-branders, partners, suppliers and employees be liable for any claims, proceedings, liabilities, obligations, damages, losses or costs in an amount exceeding the amount paid by User to the Owner hereunder in the preceding 12 months, or the period of duration of this agreement between the Owner and User, whichever is shorter.
This limitation of liability section shall apply to the fullest extent permitted by law in the applicable jurisdiction whether the alleged liability is based on contract, tort, negligence, strict liability, or any other basis, even if company has been advised of the possibility of such damage.
Some jurisdictions do not allow the exclusion or limitation of incidental or consequential damages, therefore the above limitations or exclusions may not apply to User. The terms give User specific legal rights, and User may also have other rights which vary from jurisdiction to jurisdiction. The disclaimers, exclusions, and limitations of liability under the terms shall not apply to the extent prohibited by applicable law.
              </Text>
              <Text style={styles.bold}>Indemnification:</Text>
              <Text style={styles.paragraph}>
              The User agrees to defend, indemnify and hold the Owner and its subsidiaries, affiliates, officers, directors, agents, co-branders, partners, suppliers and employees harmless from and against any and all claims or demands, damages, obligations, losses, liabilities, costs or debt, and expenses, including, but not limited to, legal fees and expenses, arising from
User’s use of and access to the Service, including any data or content transmitted or received by User;
User’s violation of these terms, including, but not limited to, User’s breach of any of the representations and warranties set forth in these terms;
User’s violation of any third-party rights, including, but not limited to, any right of privacy or intellectual property rights;
User’s violation of any statutory law, rule, or regulation;
any content that is submitted from User’s account, including third party access with User’s unique username, password or other security measure, if applicable, including, but not limited to, misleading, false, or inaccurate information;
User’s wilful misconduct; or
statutory provision by User or its affiliates, officers, directors, agents, co-branders, partners, suppliers and employees to the extent allowed by applicable law.
              </Text>
              <Text style={styles.header}>Common provisions</Text>
              <Text style={styles.bold}>No Waiver </Text>
              <Text style={styles.paragraph}>
              The Owner’s failure to assert any right or provision under these Terms shall not constitute a waiver of any such right or provision. No waiver shall be considered a further or continuing waiver of such term or any other term.
              </Text>
              <Text style={styles.bold}>Service interruption:</Text>
              <Text style={styles.paragraph}>
              To ensure the best possible service level, the Owner reserves the right to interrupt the Service for maintenance, system updates or any other changes, informing the Users appropriately.
Within the limits of law, the Owner may also decide to suspend or terminate the Service altogether. If the Service is terminated, the Owner will cooperate with Users to enable them to withdraw Personal Data or information in accordance with applicable law.
Additionally, the Service might not be available due to reasons outside the Owner’s reasonable control, such as “force majeure” (eg. labor actions, infrastructural breakdowns or blackouts etc).
              </Text>
              <Text style={styles.bold}>Service reselling:</Text>
              <Text style={styles.paragraph}>
              Users may not reproduce, duplicate, copy, sell, resell or exploit any portion of Apstro LTD and of its Service without the Owner’s express prior written permission, granted either directly or through a legitimate reselling programme.
              </Text>
              <Text style={styles.bold}>Privacy policy:</Text>
              <Text style={styles.paragraph}>
              To learn more about the use of their Personal Data, Users may refer to the privacy policy of Apstro LTD.
              </Text>
              <Text style={styles.bold}>Intellectual property rights:</Text>
              <Text style={styles.paragraph}>
              Without prejudice to any more specific provision of these Terms, any intellectual property rights, such as copyrights, trademark rights, patent rights and design rights related to Apstro LTD are the exclusive property of the Owner or its licensors and are subject to the protection granted by applicable laws or international treaties relating to intellectual property.
All trademarks — nominal or figurative — and all other marks, trade names, service marks, word marks, illustrations, images, or logos appearing in connection with Apstro LTD are, and remain, the exclusive property of the Owner or its licensors and are subject to the protection granted by applicable laws or international treaties related to intellectual property.
              </Text>
              <Text style={styles.bold}>Changes to these Terms:</Text>
              <Text style={styles.paragraph}>
              The Owner reserves the right to amend or otherwise modify these Terms at any time. In such cases, the Owner will appropriately inform the User of these changes.
Such changes will only affect the relationship with the User for the future.
The continued use of the Service will signify the User’s acceptance of the revised Terms. If Users do not wish to be bound by the changes, they must stop using the Service. Failure to accept the revised Terms, may entitle either party to terminate the Agreement.
The applicable previous version will govern the relationship prior to the User's acceptance. The User can obtain any previous version from the Owner.
If required by applicable law, the Owner will specify the date by which the modified Terms will enter into force.
              </Text>
              <Text style={styles.bold}>Assignment of contract:</Text>
              <Text style={styles.paragraph}>
              The Owner reserves the right to transfer, assign, dispose of by novation, or subcontract any or all rights or obligations under these Terms, taking the User’s legitimate interests into account. Provisions regarding changes of these Terms will apply accordingly.
Users may not assign or transfer their rights or obligations under these Terms in any way, without the written permission of the Owner.
              </Text>
              <Text style={styles.bold}>Contacts:</Text>
              <Text style={styles.paragraph}>
              All communications relating to the use of Apstro LTD must be sent using the contact information stated in this document.
              </Text>
              <Text style={styles.bold}>Severability:</Text>
              <Text style={styles.paragraph}>
              Should any provision of these Terms be deemed or become invalid or unenforceable under applicable law, the invalidity or unenforceability of such provision shall not affect the validity of the remaining provisions, which shall remain in full force and effect.
              </Text>
              <Text style={styles.bold}>US Users:</Text>
              <Text style={styles.paragraph}>
              Any such invalid or unenforceable provision will be interpreted, construed and reformed to the extent reasonably required to render it valid, enforceable and consistent with its original intent. These Terms constitute the entire Agreement between Users and the Owner with respect to the subject matter hereof, and supersede all other communications, including but not limited to all prior agreements, between the parties with respect to such subject matter. These Terms will be enforced to the fullest extent permitted by law.
              </Text>
              <Text style={styles.bold}>EU Users:</Text>
              <Text style={styles.paragraph}>
              Should any provision of these Terms be or be deemed void, invalid or unenforceable, the parties shall do their best to find, in an amicable way, an agreement on valid and enforceable provisions thereby substituting the void, invalid or unenforceable parts.
In case of failure to do so, the void, invalid or unenforceable provisions shall be replaced by the applicable statutory provisions, if so permitted or stated under the applicable law.
Without prejudice to the above, the nullity, invalidity or the impossibility to enforce a particular provision of these Terms shall not nullify the entire Agreement, unless the severed provisions are essential to the Agreement, or of such importance that the parties would not have entered into the contract if they had known that the provision would not be valid, or in cases where the remaining provisions would translate into an unacceptable hardship on any of the parties.
              </Text>
              <Text style={styles.header2}>Governing law:</Text>
              <Text style={styles.paragraph}>
                These Terms are governed by the law of the place where the Owner is based, as disclosed in the relevant section of this document, without regard to conflict of laws principles.
              </Text>
              <Text style={styles.bold}>Exception for European Consumers:</Text>
              <Text style={styles.paragraph}>
                However, regardless of the above, if the User qualifies as a European Consumer and has their habitual residence in a country where the law provides for a higher consumer protection standard, such higher standards shall prevail.
              </Text>
              <Text style={styles.header2}>Venue of jurisdiction</Text>
              <Text style={styles.paragraph}>
                The exclusive competence to decide on any controversy resulting from or connected to these Terms lies with the courts of the place where the Owner is based, as displayed in the relevant section of this document.
              </Text>
              <Text style={styles.bold}>Exception for European Consumers:</Text>
              <Text style={styles.paragraph}>
                The above does not apply to any Users that qualify as European Consumers, nor to Consumers based in Switzerland, Norway or Iceland.
              </Text>
              <Text style={styles.header}>Definitions and legal references</Text>
              <Text style={styles.bold}>Apstro LTD (or this Application):</Text>
              <Text style={styles.paragraph}>
              The property that enables the provision of the Service.
              </Text>
              <Text style={styles.bold}>Agreement:</Text>
              <Text style={styles.paragraph}>
              Any legally binding or contractual relationship between the Owner and the User, governed by these Terms.
              </Text>
              <Text style={styles.bold}>Business User:</Text>
              <Text style={styles.paragraph}>
              Any User that does not qualify as a Consumer.
              </Text>
              <Text style={styles.bold}>European (or Europe):</Text>
              <Text style={styles.paragraph}>
              Applies where a User is physically present or has their registered offices within the EU, regardless of nationality.
              </Text>
              <Text style={styles.bold}>Owner (or We):</Text>
              <Text style={styles.paragraph}>
              Indicates the natural person(s) or legal entity that provides Apstro LTD and/or the Service to Users.
              </Text>
              <Text style={styles.bold}>Service:</Text>
              <Text style={styles.paragraph}>
              The service provided by Apstro LTD as described in these Terms and on Apstro LTD.
              </Text>
              <Text style={styles.bold}>Terms:</Text>
              <Text style={styles.paragraph}>
              All provisions applicable to the use of Apstro LTD and/or the Service as described in this document, including any other related documents or agreements, and as updated from time to time.
              </Text>
              <Text style={styles.bold}>User (or You):</Text>
              <Text style={styles.paragraph}>
              Indicates any natural person or legal entity using Apstro LTD.
              </Text>
              <Text style={styles.bold}>Consumer:</Text>
              <Text style={styles.paragraph}>
              Any User qualifying as a natural person who accesses goods or services for personal use, or more generally, acts for purposes outside their trade, business, craft or profession.
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
    padding: 5,
    textAlign: 'center'
  },
  container: {
    marginVertical: 60,
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

export default TermsAndConditionsScreen;