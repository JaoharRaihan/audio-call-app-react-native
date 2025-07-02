import React, { useState, useEffect, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { AGORA_CONFIG } from './config';

const createMockRtcEngine = () => ({
  create: () => Promise.resolve(),
  enableAudio: () => Promise.resolve(),
  muteLocalAudioStream: () => Promise.resolve(),
  destroy: () => Promise.resolve(),
});

export default function App() {
  const [isJoined, setIsJoined] = useState(false);
  const [isAudioEnabled, setIsAudioEnabled] = useState(true);
  const [timeLeft, setTimeLeft] = useState(AGORA_CONFIG.MAX_CALL_DURATION);
  const [remoteUserJoined, setRemoteUserJoined] = useState(false);
  const [callStatus, setCallStatus] = useState('Ready to call');
  
  const rtcEngine = useRef(null);
  const timerRef = useRef(null);

  useEffect(() => {
    initializeAgora();
    return () => {
      if (rtcEngine.current) {
        rtcEngine.current.destroy();
      }
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isJoined && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            endCall();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isJoined, timeLeft]);

  const initializeAgora = async () => {
    try {
      rtcEngine.current = createMockRtcEngine();
      await rtcEngine.current.enableAudio();
      setCallStatus('Ready to call');
    } catch (error) {
      console.error('Failed to initialize:', error);
    }
  };

  const joinCall = async () => {
    try {
      setCallStatus('Connecting...');
      
      setTimeout(() => {
        setIsJoined(true);
        setCallStatus('Connected');
        setTimeLeft(AGORA_CONFIG.MAX_CALL_DURATION);
        
        setTimeout(() => {
          setRemoteUserJoined(true);
          setCallStatus('In call with remote user');
        }, 2000);
      }, 1500);
      
    } catch (error) {
      console.error('Failed to join channel:', error);
      setCallStatus('Failed to connect');
    }
  };

  const endCall = async () => {
    try {
      setIsJoined(false);
      setRemoteUserJoined(false);
      setCallStatus('Call ended');
      setTimeLeft(AGORA_CONFIG.MAX_CALL_DURATION);
      setIsAudioEnabled(true);
      
      setTimeout(() => {
        setCallStatus('Ready to call');
      }, 2000);
      
    } catch (error) {
      console.error('Failed to leave channel:', error);
    }
  };

  const toggleAudio = async () => {
    try {
      await rtcEngine.current.muteLocalAudioStream(!isAudioEnabled);
      setIsAudioEnabled(!isAudioEnabled);
    } catch (error) {
      console.error('Failed to toggle audio:', error);
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      
      <View style={styles.content}>
        {!isJoined ? (
          <View style={styles.setupContainer}>
            <Text style={styles.appTitle}>Audio Call</Text>
            <TouchableOpacity style={styles.joinButton} onPress={joinCall}>
              <Text style={styles.joinButtonText}>Start Call</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.callContainer}>
            <Text style={styles.timer}>
              {formatTime(timeLeft)}
            </Text>
            
            <Text style={styles.status}>{callStatus}</Text>

            <View style={styles.buttons}>
              <TouchableOpacity 
                style={[styles.button, { backgroundColor: isAudioEnabled ? '#00C853' : '#FF5252' }]}
                onPress={toggleAudio}
              >
                <Text style={styles.buttonText}>
                  {isAudioEnabled ? '🎤' : '🔇'}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity style={[styles.button, styles.endButton]} onPress={endCall}>
                <Text style={styles.buttonText}>📞</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  setupContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 60,
    textAlign: 'center',
  },
  joinButton: {
    backgroundColor: '#00C853',
    paddingVertical: 20,
    paddingHorizontal: 50,
    borderRadius: 50,
    shadowColor: '#00C853',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  joinButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  callContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timer: {
    fontSize: 72,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  status: {
    fontSize: 18,
    color: '#888',
    marginBottom: 80,
    textAlign: 'center',
  },
  buttons: {
    flexDirection: 'row',
    gap: 40,
    alignItems: 'center',
  },
  button: {
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  endButton: {
    backgroundColor: '#FF1744',
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
  },
});
