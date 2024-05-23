import { EXTENSION_URL } from "../const/urls";

const PrivacyPolicy = () => {
  return (
    <div>
      <h1 className="text-4xl">Privacy Policy</h1>
      <p>Last updated: May 20, 2024</p>

      <p className="mt-6">
        Aditeya Srivastava developed the chrome extension "
        <a
          href={EXTENSION_URL}
          target="_blank"
          className="text-blue-600 hover:underline"
        >
          JobCredFill
        </a>
        ". I take your privacy seriously. To better protect your privacy, I
        provide this privacy policy notice explaining the way your personal
        information is collected and used.
      </p>

      <h2 className="mt-4 text-lg underline">
        Collection of Routine Information
      </h2>
      <div>
        <p>
          This extension collects basic information about its users. This
          information includes:
        </p>
        <ul className="list-disc ml-8">
          <li>Name</li>
          <li>Email</li>
        </ul>
        <p className="font-semibold">
          But everything is stored locally on your computer. We do not save
          anything on our servers.
        </p>
      </div>

      <h2 className="mt-4 text-lg underline">Cookies</h2>
      <p>
        Where necessary, this website uses cookies to store information about a
        visitor’s preferences and history to better serve the visitor and/or
        present the visitor with customized content.
      </p>

      <h2 className="mt-4 text-lg underline">Security</h2>
      <p>
        The security of your personal information is important to me, but
        remember that no method of transmission over the Internet, or method of
        electronic storage, is 100% secure. While I strive to use commercially
        acceptable means to protect your personal information, I cannot
        guarantee its absolute security.
      </p>

      <h2 className="mt-4 text-lg underline">Changes To This Privacy Policy</h2>
      <p>
        This Privacy Policy is effective as of 2024-05-20 and will remain in
        effect except concerning any changes in its provisions in the future,
        which will be in effect immediately after being posted on this page. I
        reserve the right to update or change my Privacy Policy at any time and
        you should check this Privacy Policy periodically. If I make any
        material changes to this Privacy Policy, I will notify you either
        through the email address you have provided me or by placing a prominent
        notice on my website.
      </p>

      <h2 className="mt-4 text-lg underline">Contact Information</h2>
      <p>
        For any questions or concerns regarding the privacy policy, please send
        me an email at{" "}
        <a
          href="mailto:this.is.aditeya@gmail.com"
          className="text-blue-600 hover:underline"
        >
          this.is.aditeya@gmail.com
        </a>
        .
      </p>
      <p></p>
    </div>
  );
};

export default PrivacyPolicy;
